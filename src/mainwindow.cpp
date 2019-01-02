#include "mainwindow.h"
#include "ui_mainwindow.h"

#include <QMessageBox>
#include <QFileDialog>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    colorPickerSwatch *colorPicker = new colorPickerSwatch();
    ui->tabletToolBar->addWidget(colorPicker);
    colorPicker->show();
    QCoreApplication::setAttribute(Qt::AA_CompressHighFrequencyEvents); // reduce lag

    this->m_drawRegion = ui->drawRegion;
    this->m_pdfViewer = ui->pdfViewer;
    m_pdfViewer->hide();
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_actionAbout_triggered()
{
    QMessageBox::about(this, tr("PDF Marker 1.0 Beta"),
                       "<P ALIGN='center'>"
                          "Creators:<BR>"
                          "Christine Chen (chenchr@umich.edu)<BR>Noah Gilson (nagilson@umich.edu)<BR><BR>"
                          "Version 1.0 Beta<BR>"
                          "Qt Version 5.1.12<BR>"
                          "GitHub <a href='https://github.com/nagilson/pdf-marker/'  style='color:#FFFFFF;'>Repository</a>"
                       "</P>");
}

void MainWindow::on_actionOpen_triggered()
{
    bool warn = true; bool let_redirect = true;
    if(m_drawRegion->getSaveState()){
        warn = false;
    }
    if(warn){
        if (QMessageBox::Yes !=
                QMessageBox(QMessageBox::Information, "PDF Marker Warning", "Your Annotations are unsaved. Continue anyways?", QMessageBox::Yes|QMessageBox::No).exec())
        {
            let_redirect = false;
        }
    }
    if(let_redirect) {
        m_drawRegion->wipe();
        QString pdf_path = QFileDialog::getOpenFileName(this, "Select a pdf", "", "*.pdf");
        if(pdf_path != "") {
            m_pdfViewer->redirect(pdf_path);
            m_pdfViewer->show();
        }
    }
}
