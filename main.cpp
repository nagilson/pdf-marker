#include "mainwindow.h"
#include <QApplication>
#include <QMessageBox>

void configureApp(QApplication& app);
void styleApp(QApplication& app);

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    configureApp(a);
    w.show();

    return a.exec();
}

void configureApp(QApplication& app){
    styleApp(app);
}

void styleApp(QApplication& app){
    QString style = "QWidget { background: rgb(64, 69, 82) }"
                    "QToolBar { color: white; background: rgb(49, 55, 66) }"
                    "QMenuBar { color: white; background: rgb(32, 36, 44);"
                        "font-family: 'Arial'; font-size: 14px}"
                    "QMenu { color: white; background: rgb(32, 36, 44) }"
                    "QMenuBar::item:selected { color: white; background: rgb(49, 55, 66) }"
                    "QMenu::item:selected { color: white; background: rgb(49, 55, 66) }"
                    "QDialog { color: white }"
                    "QPushButton { color: rgb(49, 55, 66); background: white;  }";
     app.setStyleSheet((style));
}
