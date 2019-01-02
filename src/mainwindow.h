#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <lib/3rdparty/colorwheel.h>
#include <menu_extra/colorpickerswatch.h>
#include "pdfannotatorapp.h"
#include "tabletcanvas.h"

#include <QMainWindow>
#include <QApplication>

QT_BEGIN_NAMESPACE
class QColorDialog;
QT_END_NAMESPACE
class TabletCanvas;

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void on_actionAbout_triggered();

private:
    Ui::MainWindow *ui;

    TabletCanvas *m_drawRegion;
    QColorDialog *m_colorDialog;
};

#endif // MAINWINDOW_H
