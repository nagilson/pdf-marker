#ifndef PDFANNOTATORAPP_H
#define PDFANNOTATORAPP_H

#include "tabletcanvas.h"
#include <QApplication>

class PdfAnnotatorApp : public QApplication
{
    Q_OBJECT

    public:
        PdfAnnotatorApp(int& argc, char **argv)
            : QApplication(argc, argv) {}
        bool event(QEvent *event) override;
        void setDrawRegion(TabletCanvas *canvas);

    private:
        TabletCanvas *m_drawRegion;
};

#endif // PDFANNOTATORAPP_H
