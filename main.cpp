#include "mainwindow.h"
#include "tabletcanvas.h"
#include "pdfannotatorapp.h"
#include <QApplication>


void configureApp(QApplication& app);
void styleApp(QApplication& app);

int main(int argc, char *argv[])
{
    PdfAnnotatorApp a(argc, argv);
    TabletCanvas *drawRegion = new TabletCanvas;
    MainWindow w(drawRegion);

    a.setDrawRegion(drawRegion);
    configureApp(a);
    w.show();
    w.setWindowState(Qt::WindowMaximized);
    return a.exec();
}

void configureApp(QApplication& app){
    styleApp(app);
}

void styleApp(QApplication& app){
    QString style = "QWidget { background: rgb(64, 69, 82) }"
                    "QTextEdit { background : rgb(32, 36, 44) }"
                    "QToolBar { color: white; background: rgb(49, 55, 66) }"
                    "QMenuBar { color: white; background: rgb(32, 36, 44);"
                        "font-family: 'Arial'; font-size: 14px}"
                    "QMenu { color: white; background: rgb(32, 36, 44) }"
                    "QMenuBar::item:selected { color: white; background: rgb(49, 55, 66) }"
                    "QMenu::item:selected { color: white; background: rgb(49, 55, 66) }"
                    "QDialog { color: white }"
                    "QPushButton { color: rgb(49, 55, 66); background: white;  }"
                    "QMessageBox { background: rgb(32, 36, 44); messagebox-text-interaction-flags: 5; }";
     app.setStyleSheet((style));
}
