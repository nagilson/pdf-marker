#include "tabletcanvas.h"

TabletCanvas::TabletCanvas()
  : QWidget(nullptr)
  , m_alphaChannelValuator(NoValuator)
  , m_colorSaturationValuator(NoValuator)
  , m_lineWidthValuator(PressureValuator)
  , m_color(Qt::black)
  , m_pen(QBrush(m_color), 1.0, Qt::SolidLine, Qt::RoundCap, Qt::RoundJoin)
  , m_deviceDown(false)
  , m_tool(Pen)
{
    resize(500, 500);
    setAutoFillBackground(true);
    setAttribute(Qt::WA_TabletTracking);
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

void TabletCanvas::SetColor(const QColor &c){
    if (c.isValid()) m_color = c;
}

QColor TabletCanvas::color() const {
    return m_color;
}

void TabletCanvas::setTabletDevice(){
 { updateCursor(); }
}

int TabletCanvas::maximum(const int &a, const int &b) const{
    return a > b ? a : b;
}

void TabletCanvas::tabletEvent(QTabletEvent *event){
    switch (event->type()) {
        case QEvent::TabletPress:
            if(!m_deviceDown) {
                m_deviceDown = true;
                lastPoint.pos = event->posF();
                lastPoint.pressure = event->pressure();
                lastPoint.rotation = event->rotation();
            }
            // Tablet is being pressed but pen isn't moving
            break;
        case QEvent::TabletMove:
            if(m_deviceDown) {
                updateBrush(event);
                QPainter painter(&m_pixmap);
                paintPixmap(painter, event);
                lastPoint.pos = event->posF();
                lastPoint.pressure = event->pressure();
                lastPoint.rotation = event->rotation();
            }
            break;
        case QEvent::TabletRelease:
            if (m_deviceDown && event->buttons() == Qt::NoButton)
                m_deviceDown = false;
            update();
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
    newPixmap.fill(Qt::white);
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
           painter.setPen(m_pen);
           painter.drawLine(lastPoint.pos, event->posF());
           update(QRect(lastPoint.pos.toPoint(), event->pos()).normalized()
                  .adjusted(-maxPenRadius, -maxPenRadius, maxPenRadius, maxPenRadius));
           break;
       case QTabletEvent::Airbrush:
       case QTabletEvent::Puck:
       case QTabletEvent::FourDMouse:
       case QTabletEvent::NoDevice:
       case QTabletEvent::RotationStylus:
       case QTabletEvent::XFreeEraser:
          std::cerr << "This input device is not supported.";
          break;
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

    if(event->pointerType() == QTabletEvent::Eraser
            || m_tool == Eraser){
        m_pen.setColor(Qt::transparent);
        m_pen.setWidthF((event->pressure() * 10 +1));
    }
    else m_pen.setColor(m_color);
}

void TabletCanvas::updateCursor(){
    QCursor cursor;
    switch (m_tool) {
        case Pen:
        case Eraser:
               // <!> update with cursor and dynamic cursor size
            cursor = QCursor();
            break;
        case Highlighter:
            cursor = QCursor();
    }
    setCursor((cursor));
}

void TabletCanvas::resizeEvent(QResizeEvent *)
{
    initPixmap();
}
