#include "mainwindow.h"
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;

    // --- Style ---
    QString style = "QWidget { background: rgb(64, 69, 82) }"
                    "QMenuBar { color: white; background: rgb(32, 36, 44);"
                        " font-family: 'Arial'; font-size: 1.5em}"
                    "QMenu { color: white; background: rgb(32, 36, 44) }"
                    "QMenuBar::item:selected { color: white; background: rgb(49, 55, 66) }";
    a.setStyleSheet((style));
    // --- End Style ---

    w.show();

    return a.exec();
}
