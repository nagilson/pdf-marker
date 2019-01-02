#include "mainwindow.h"
#include <QApplication>
#include "lib/3rdparty/qpdfjs/src/qpdfjswindow.h"
#include <QDir>
#include <fstream>

void configureApp(QApplication& app);
void styleApp(QApplication& app);

int main(int argc, char *argv[])
{
    PdfAnnotatorApp a(argc, argv);
    TabletCanvas *drawRegion = new TabletCanvas;
    MainWindow w(drawRegion);

    QString app_path = qApp->applicationDirPath();
#ifdef Q_OS_MACOS
    QDir app_path_dir(app_path);
    app_path_dir.cdUp();
    app_path_dir.cdUp();
    app_path_dir.cdUp();
    app_path = app_path_dir.absolutePath();
#endif
    QString pdf_path = app_path+"/empty.pdf";
    //QPdfJsWindow *pdfView = new QPdfJsWindow(pdf_path);
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
    QString style = "QTextEdit { background : rgb(32, 36, 44) }"
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
