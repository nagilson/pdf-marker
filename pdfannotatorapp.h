#ifndef PDFANNOTATORAPP_H
#define PDFANNOTATORAPP_H

#include <QApplication>
#include "tabletcanvas.h"

class PdfAnnotatorApp : public QApplication
{
    Q_OBJECT

    public:
        PdfAnnotatorApp(int& argc, char **argv) :
         QApplication(argc, argv) {}
        bool event(QEvent *event) override;
        void setDrawRegion(TabletCanvas *canvas);

    private:
        TabletCanvas *m_drawRegion;
};

#endif // PDFANNOTATORAPP_H
