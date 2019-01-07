#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <lib/3rdparty/colorwheel.h>
#include <menu_extra/colorpickerswatch.h>
#include "lib/3rdparty/qpdfjs/src/qpdfjswindow.h"
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
    void on_actionOpen_triggered();

    void on_actionUndo_triggered();

    void on_actionRedo_triggered();

private:
    Ui::MainWindow *ui;
    QColorDialog *m_colorDialog;

public:
    QPdfJsWindow *m_pdfViewer;
    TabletCanvas *m_drawRegion;
};

#endif // MAINWINDOW_H
