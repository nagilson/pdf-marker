#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QMessageBox>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    // --- Style ---
    ui->menuBar->setNativeMenuBar(false);
    // --- End Style ---

}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_actionAbout_triggered()
{
    QMessageBox::about(this, tr("PDF Marker 1.0 Beta"),
                       "<P ALIGN='center' background: white><FONT COLOR='#ffffff'>Creators:<BR>"
                       "Christine Chen (chenchr@umich.edu)<BR>Noah Gilson (nagilson@umich.edu)<BR><BR>"
                          "Version 1.0 Beta<BR>"
                          "Qt Version 5.1.12<BR>"
                          "GitHub <a href='https://github.com/nagilson/pdf-marker/'  style='color:#FFFFFF;'>Repository</a></FONT></P></BODY>");
}
