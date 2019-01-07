#include "tabletcanvas.h"

#include <iostream>
using BrushStroke = std::vector<TabletCanvas::Point>;

TabletCanvas::Point::Point(){
    ;
}

TabletCanvas::Point::Point(const QPointF& pos, const qreal& pressure, const qreal& rotation, const QColor& color)
  : pos(pos)
  , pressure(pressure)
  , rotation(rotation)
  , color(color) {
    ;
}

TabletCanvas::BrushStrokeAction::BrushStrokeAction(TabletCanvas& canvas){
    draw_region = &canvas;
}

void TabletCanvas::BrushStrokeAction::undo() {
    QPainter painter(draw_region);
    draw_region->paintPixmap(painter, restore_region, pen);
}

void TabletCanvas::BrushStrokeAction::redo() {
    QPainter painter(draw_region);
    draw_region->paintPixmap(painter, paint_region, pen);
}

void TabletCanvas::BrushStrokeAction::setPen(QPen& pen){
    this->pen = pen;
}

QPen TabletCanvas::BrushStrokeAction::getPen(){
    return pen;
}

void TabletCanvas::BrushStrokeAction::addPaintedPixel(const Point pixel){
    restore_region.push_back(pixel);
}

void TabletCanvas::BrushStrokeAction::addRestorablePixel(const Point pixel){
    paint_region.push_back(pixel);
}

void TabletCanvas::BrushStrokeAction::emptyStrokeAction(){
    paint_region.clear();
    restore_region.clear();
}

TabletCanvas::TabletCanvas()
  : QWidget(nullptr)
  , m_alphaChannelValuator(NoValuator)
  , m_colorSaturationValuator(NoValuator)
  , m_lineWidthValuator(PressureValuator)
  , m_color(Qt::black)
  , m_pen(QBrush(m_color), 1.0, Qt::SolidLine, Qt::RoundCap, Qt::RoundJoin)
  , m_deviceDown(false)
  , m_saved(true)
  , m_tool(Pen)
  , m_currentBrushStrokeAction(*this)
{
    resize(500, 500);
    setAutoFillBackground(true);
    setAttribute(Qt::WA_TabletTracking);
    m_undoStack.setUndoLimit(15);
}

TabletCanvas::TabletCanvas(QWidget *parent)
  : QWidget(parent)
  , m_alphaChannelValuator(NoValuator)
  , m_colorSaturationValuator(NoValuator)
  , m_lineWidthValuator(PressureValuator)
  , m_color(Qt::black)
  , m_pen(QBrush(m_color), 1.0, Qt::SolidLine, Qt::RoundCap, Qt::RoundJoin)
  , m_deviceDown(false)
  , m_saved(true)
  , m_tool(Pen)
  , m_currentBrushStrokeAction(*this)
{
    resize(500, 500);
    setAutoFillBackground(true);
    setAttribute(Qt::WA_TabletTracking);
    m_undoStack.setUndoLimit(15);
}

void TabletCanvas::wipe(){
    m_pixmap.fill(Qt::transparent);
    m_saved = true;
}

void TabletCanvas::undo(){
    if(m_undoStack.canUndo()){
        m_undoStack.undo();
    }
}

void TabletCanvas::redo(){
    if(m_undoStack.canRedo()){
        m_undoStack.redo();
    }
}

void TabletCanvas::setSaveState(const bool &state){
    m_saved = state;
}

bool TabletCanvas::getSaveState(){
    return m_saved;
}

bool TabletCanvas::isClear(){
    QPixmap clear_map = m_pixmap; clear_map.fill(Qt::transparent);
    return m_pixmap == clear_map;
}

void TabletCanvas::setAlphaChannelValuator(const Valuator& type){
  m_alphaChannelValuator = type;
}

void TabletCanvas::setColorSaturationValuator(const Valuator& type){
    m_colorSaturationValuator = type;
}

void TabletCanvas::setLineWidthType(const Valuator& type){
    m_lineWidthValuator = type;
}

void TabletCanvas::setColor(const QColor &c){
    if (c.isValid()) m_color = c;
}

QColor TabletCanvas::getColor() const {
    return m_color;
}

QCursor TabletCanvas::setTabletDevice(const QTabletEvent *event){
 { return updateCursor(event); }
}

void TabletCanvas::tabletEvent(QTabletEvent *event){
    switch (event->type()) {
        case QEvent::TabletPress:
            if(!m_deviceDown) {
                m_deviceDown = true;
                lastPoint.pos = event->posF();
                lastPoint.pressure = event->pressure();
                lastPoint.rotation = event->rotation();
                lastPoint.color = m_color;
            }
            m_currentBrushStrokeAction.setPen(m_pen);
            // Tablet is being pressed but pen isn't moving
            break;
        case QEvent::TabletMove:

            if(m_deviceDown) {
                updateBrush(event);
                QPainter painter(&m_pixmap);
                switch(m_tool){
                    case Eraser:
                        painter.setCompositionMode(QPainter::CompositionMode_Clear);
                        break;
                    default:
                        painter.setCompositionMode((QPainter::CompositionMode_SourceOver));
                }

                // Get the current pixel on the map so we can undo
                Point uneditedPixel(
                    event->posF(),
                    event->pressure(),
                    event->rotation(),
                    m_pixmap.toImage().pixel(event->posF().x(), event->posF().y())
                );
                m_currentBrushStrokeAction.addRestorablePixel(uneditedPixel);

                // Paint to the map and add the edited pixel so we can redo
                paintPixmap(painter, event);

                lastPoint.pos = event->posF();
                lastPoint.pressure = event->pressure();
                lastPoint.rotation = event->rotation();
                lastPoint.color = painter.pen().color();

                m_currentBrushStrokeAction.addPaintedPixel(lastPoint);
            }
            break;
        case QEvent::TabletRelease:
            if (m_deviceDown && event->buttons() == Qt::NoButton)
                m_deviceDown = false;
            update();
            m_undoStack.push(&m_currentBrushStrokeAction);
            m_currentBrushStrokeAction.emptyStrokeAction();
            break;
        default:
            break;
    }
    event->accept();
}

void TabletCanvas::initPixmap()
{
    const qreal dpr = devicePixelRatioF();
    // <!> Change later to match pdf size
    QPixmap newPixmap = QPixmap(width() * dpr, height() * dpr);
    newPixmap.setDevicePixelRatio(dpr);
    newPixmap.fill(Qt::transparent);
    QPainter painter(&newPixmap);
    if (!m_pixmap.isNull())      
        painter.drawPixmap(0, 0, m_pixmap);
    painter.end();
    m_pixmap = newPixmap;
}

void TabletCanvas::paintEvent(QPaintEvent *)
{
    if (m_pixmap.isNull())
        initPixmap();
    QPainter painter(this);
    painter.drawPixmap(0, 0, m_pixmap);
}

void TabletCanvas::paintPixmap(QPainter &painter, QTabletEvent *event){
    static qreal maxPenRadius = pressureToWidth(1.0);
    painter.setRenderHint(QPainter::Antialiasing);
    switch (event->device()) {
       case QTabletEvent::Stylus:
       case QTabletEvent::RotationStylus:
       case QTabletEvent::XFreeEraser:
           painter.setPen(m_pen);
           painter.drawLine(lastPoint.pos, event->posF());
           update(QRect(lastPoint.pos.toPoint(), event->pos()).normalized()
                  .adjusted(-maxPenRadius, -maxPenRadius, maxPenRadius, maxPenRadius));
           break;
       case QTabletEvent::Airbrush:
       case QTabletEvent::Puck:
       case QTabletEvent::FourDMouse:
       case QTabletEvent::NoDevice:
          std::cerr << "This input device is not supported.";
          break;
    }
}

void TabletCanvas::paintPixmap(QPainter &painter, BrushStroke stroke, const QPen& pen){
    static qreal maxPenRadius = pressureToWidth(1.0);
    painter.setRenderHint(QPainter::Antialiasing);
    painter.setPen(pen);
    auto startingPixel = stroke.begin();
    auto endingPixel = startingPixel + 1;
    for(; endingPixel != stroke.end(); ++endingPixel, ++startingPixel){
        painter.drawLine(startingPixel->pos, endingPixel->pos);
        update(QRect(startingPixel->pos.toPoint(), endingPixel->pos.toPoint()).normalized()
               .adjusted(-maxPenRadius, -maxPenRadius, maxPenRadius, maxPenRadius));
    }
}

qreal TabletCanvas::pressureToWidth(const qreal& pressure)
{
    return pressure * 10 + 1;
}

void TabletCanvas::updateBrush(const QTabletEvent *event){
    int hue, saturation, value, alpha;
    m_color.getHsv(&hue, &saturation, &value, &alpha);

    switch(m_alphaChannelValuator){
       case PressureValuator:
           m_color.setAlphaF(event->pressure());
           break;
       default:
            m_color.setAlpha(255);
    }

    switch(m_colorSaturationValuator){
        case PressureValuator:
            m_color.setHsv(hue, int(event->pressure() * 255.0), value, alpha);
            break;
        default:
            ;
    }

    switch(m_lineWidthValuator){
        case PressureValuator:
            m_pen.setWidthF(pressureToWidth(event->pressure()));
            break;
        default:
            m_pen.setWidthF(1);
    }

    if(event->pointerType() == QTabletEvent::Eraser){
        m_tool = Eraser;
        m_pen.setWidthF((event->pressure() * 10 + 1));
    }
    else {
        m_tool = Pen;
        m_pen.setColor(m_color);
    }
}

QCursor TabletCanvas::updateCursor(const QTabletEvent *event){
    // <!> Functionality will need to be moved up to pdfannotatorapp
    QCursor cursor = QCursor();
    if(event->type() != QEvent::TabletLeaveProximity){
        if(event->pointerType() == QTabletEvent::Eraser)
        { cursor = Qt::CrossCursor; }
        switch (m_tool) {
            case Pen:
                cursor = Qt::CrossCursor;
                break;
            case Eraser:
                   // <!> update with cursor and dynamic cursor size
                cursor = Qt::CrossCursor;
                break;
            case Highlighter:
                ;
        }
    }
    return cursor;
}

void TabletCanvas::resizeEvent(QResizeEvent *)
{
    initPixmap();
}
