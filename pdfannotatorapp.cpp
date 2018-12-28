#include <QtWidgets>
#include "pdfannotatorapp.h"

bool PdfAnnotatorApp::event(QEvent *event){
    if (event->type() == QEvent::TabletEnterProximity ||
           event->type() == QEvent::TabletLeaveProximity) {
           m_drawRegion->setTabletDevice(static_cast<QTabletEvent *>(event));
           return true;
       }
       return QApplication::event(event);
}

void PdfAnnotatorApp::setDrawRegion(TabletCanvas *canvas){
    m_drawRegion = canvas;
}
