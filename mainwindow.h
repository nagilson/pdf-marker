#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
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
    void open();
    void save();
    void about();

    void on_actionAbout_triggered();

private:
    Ui::MainWindow *ui;

    TabletCanvas *m_canvas;
    QColorDialog *m_colorDialog;
};

#endif // MAINWINDOW_H
