#include "mainwindow.h"
#include <QApplication>

#include <QDir>

void configureApp(QApplication& app);
void styleApp(QApplication& app);

int main(int argc, char *argv[])
{
    PdfAnnotatorApp a(argc, argv);
    MainWindow w;
    TabletCanvas *drawRegion = w.m_drawRegion;
    QPdfJsWindow *pdfViewer = w.m_pdfViewer;

    a.setDrawRegion(drawRegion);
    configureApp(a);

    w.show();
    w.setWindowState(Qt::WindowMaximized);

    auto result = a.exec();
    return result;
}

void configureApp(QApplication& app){
    styleApp(app);
}

void styleApp(QApplication& app){
    QString style = "QMainWindow { background: rgb(64, 64, 64) }"
                    "QTextEdit { background : rgb(32, 36, 44) }"
                    "QToolBar { color: white; background: rgb(47, 49, 51) }"
                    "QMenuBar { color: white; background: rgb(32, 36, 44);"
                        "font-family: 'Arial'; font-size: 14px}"
                    "QMenu { color: white; background: rgb(32, 36, 44) }"
                    "QMenuBar::item:selected { color: white; background: rgb(49, 55, 66) }"
                    "QMenu::item:selected { color: white; background: rgb(49, 55, 66) }"
                    "QDialog { color: white }"
                    "QPushButton { color: rgb(49, 55, 66); background: white;  }"
                    "QMessageBox { background: rgb(32, 36, 44); messagebox-text-interaction-flags: 5; }"
                    "QMessageBox QLabel { color: rgb(200, 200, 200); }";
     app.setStyleSheet((style));
}
