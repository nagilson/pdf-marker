/********************************************************************************
** Form generated from reading UI file 'colorpickerswatch.ui'
**
** Created by: Qt User Interface Compiler version 5.12.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_COLORPICKERSWATCH_H
#define UI_COLORPICKERSWATCH_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDial>
#include <QtWidgets/QGraphicsView>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_colorPickerSwatch
{
public:
    QPushButton *topSwatch;
    QGraphicsView *graphicsView;
    QDial *dial;

    void setupUi(QWidget *colorPickerSwatch)
    {
        if (colorPickerSwatch->objectName().isEmpty())
            colorPickerSwatch->setObjectName(QString::fromUtf8("colorPickerSwatch"));
        colorPickerSwatch->resize(219, 204);
        topSwatch = new QPushButton(colorPickerSwatch);
        topSwatch->setObjectName(QString::fromUtf8("topSwatch"));
        topSwatch->setGeometry(QRect(0, 0, 31, 31));
        topSwatch->setBaseSize(QSize(5, 0));
        graphicsView = new QGraphicsView(colorPickerSwatch);
        graphicsView->setObjectName(QString::fromUtf8("graphicsView"));
        graphicsView->setGeometry(QRect(30, 0, 16, 16));
        dial = new QDial(colorPickerSwatch);
        dial->setObjectName(QString::fromUtf8("dial"));
        dial->setGeometry(QRect(60, 70, 50, 64));

        retranslateUi(colorPickerSwatch);

        QMetaObject::connectSlotsByName(colorPickerSwatch);
    } // setupUi

    void retranslateUi(QWidget *colorPickerSwatch)
    {
        colorPickerSwatch->setWindowTitle(QApplication::translate("colorPickerSwatch", "Form", nullptr));
        topSwatch->setText(QString());
    } // retranslateUi

};

namespace Ui {
    class colorPickerSwatch: public Ui_colorPickerSwatch {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_COLORPICKERSWATCH_H
