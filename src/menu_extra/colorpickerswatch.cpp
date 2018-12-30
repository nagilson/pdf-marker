#include "colorpickerswatch.h"
#include "ui_colorpickerswatch.h"

colorPickerSwatch::colorPickerSwatch(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::colorPickerSwatch)
{
    ui->setupUi(this);
    m_topSwatch = ui->topSwatch;

}

colorPickerSwatch::~colorPickerSwatch()
{
    delete ui;
}

void colorPickerSwatch::on_topSwatch_clicked()
{
    m_topSwatch->setStyleSheet("QPushButton { background-color: yellow }"); // placeholder test color
}
