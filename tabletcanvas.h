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
#include <iostream>

QT_BEGIN_NAMESPACE
class QPaintEvent;
class QString;
QT_END_NAMESPACE

class TabletCanvas : public QWidget
{
    Q_OBJECT

public:
    enum Valuator { PressureValuator, NoValuator };
    enum Tool { Pen, Eraser, Highlighter };
    Q_ENUM(Valuator)
    Q_ENUM(Tool)

    TabletCanvas();
    TabletCanvas(QWidget *parent);

    void setAlphaChannelValuator(const Valuator& type);
    void setColorSaturationValuator(const Valuator& type);
    void setLineWidthType(const Valuator& type);
    void SetColor(const QColor& c);
    QColor color() const;
    void setTabletDevice(const QTabletEvent *event);
    int maximum(const int& a, const int& b) const;

protected:
    void tabletEvent(QTabletEvent *event) override;
    void paintEvent(QPaintEvent *event) override;
    void resizeEvent(QResizeEvent *event) override;

private:
    void initPixmap();
    void paintPixmap(QPainter &painter, QTabletEvent *event);
    Qt::BrushStyle brushPattern(const qreal& value);
    static qreal pressureToWidth(const qreal& pressure);
    void updateBrush(const QTabletEvent *event);
    void updateCursor(const QTabletEvent *event);

    Valuator m_alphaChannelValuator;
    Valuator m_colorSaturationValuator;
    Valuator m_lineWidthValuator;
    QColor m_color;
    QPixmap m_pixmap;
    QPen m_pen;
    bool m_deviceDown;
    Tool m_tool;

    struct Point {
        QPointF pos;
        qreal pressure;
        qreal rotation;
    } lastPoint;
};

#endif // TABLETCANVAS_H
