#ifndef COLORPICKERSWATCH_H
#define COLORPICKERSWATCH_H

#include <QWidget>

namespace Ui {
class colorPickerSwatch;
}

class colorPickerSwatch : public QWidget
{
    Q_OBJECT

public:
    explicit colorPickerSwatch(QWidget *parent = nullptr);
    ~colorPickerSwatch();

private slots:
    void on_topSwatch_clicked();

private:
    Ui::colorPickerSwatch *ui;
    QWidget *m_topSwatch;
    QWidget *m_bottomSwatch;
    QColor topColor;
    QColor bottomColor;
};

#endif // COLORPICKERSWATCH_H
