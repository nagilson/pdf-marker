#ifndef TABLETCANVAS_H
#define TABLETCANVAS_H

#include <QWidget>
#include <QPixmap>
#include <QPoint>
#include <QTabletEvent>
#include <QColor>
#include <QBrush>
#include <QPen>
#include <QPoint>
#include <QPainter>
#include <stack>
#include <QUndoCommand>

QT_BEGIN_NAMESPACE
class QPaintEvent;
class QString;
QT_END_NAMESPACE

class TabletCanvas : public QWidget
{

    public:
       struct Point {
           Point();
           Point(const QPointF& pos, const qreal& pressure, const qreal& rotation, const QColor& color);
           QPointF pos;
           qreal pressure;
           qreal rotation;
           QColor color;
       };

    private:
       using BrushStroke = std::vector<TabletCanvas::Point>;
       struct BrushStrokeAction : QUndoCommand {
           BrushStrokeAction(TabletCanvas& canvas);
           void undo() override;
           void redo() override;
           void setPen(QPen& pen);
           QPen getPen();
           void addPaintedPixel(const Point pixel);
           void addRestorablePixel(const Point pixel);
           void emptyStrokeAction();
           private:
               QPen pen;
               TabletCanvas *draw_region;
               BrushStroke restore_region;
               BrushStroke paint_region;
       };
       friend struct BrushStrokeAction;

        Q_OBJECT

    public:
        enum Valuator { PressureValuator, NoValuator };
        enum Tool { Pen, Eraser, Highlighter };
        Q_ENUM(Valuator)
        Q_ENUM(Tool)

        TabletCanvas();
        TabletCanvas(QWidget *parent);

        void wipe();
        void undo();
        void redo();
        void setSaveState(const bool& state);
        bool getSaveState();
        bool isClear();
        void setAlphaChannelValuator(const Valuator& type);
        void setColorSaturationValuator(const Valuator& type);
        void setLineWidthType(const Valuator& type);
        void setColor(const QColor& c);
        QColor getColor() const;
        QCursor setTabletDevice(const QTabletEvent *event);

    protected:
        void tabletEvent(QTabletEvent *event) override;
        void paintEvent(QPaintEvent *event) override;
        void resizeEvent(QResizeEvent *event) override;

    private:
        void initPixmap();
        void paintPixmap(QPainter &painter, QTabletEvent *event);
        void paintPixmap(QPainter &painter, BrushStroke stroke, const QPen& pen);
        Qt::BrushStyle brushPattern(const qreal& value);
        static qreal pressureToWidth(const qreal& pressure);
        void updateBrush(const QTabletEvent *event);
        QCursor updateCursor(const QTabletEvent *event);

        Valuator m_alphaChannelValuator;
        Valuator m_colorSaturationValuator;
        Valuator m_lineWidthValuator;
        QColor m_color;
        QPixmap m_pixmap;
        QPen m_pen;
        bool m_deviceDown;
        bool m_saved;
        Tool m_tool;
        Point lastPoint;
        QUndoStack m_undoStack; // also handles redo
        BrushStrokeAction m_currentBrushStrokeAction;
};

#endif // TABLETCANVAS_H
