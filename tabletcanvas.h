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

class TabletCanvas : public QWidget
{
    Q_OBJECT
public:
    explicit TabletCanvas(QWidget *parent = nullptr);

signals:

public slots:
};

#endif // TABLETCANVAS_H