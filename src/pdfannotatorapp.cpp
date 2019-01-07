#include "pdfannotatorapp.h"

#include <QtWidgets>

bool PdfAnnotatorApp::event(QEvent *event){
    if (event->type() == QEvent::TabletEnterProximity ||
            event->type() == QEvent::TabletLeaveProximity) {
            switch(event->type()){
                case QEvent::TabletLeaveProximity:
                    m_drawRegion->setAttribute(Qt::WA_TransparentForMouseEvents);
                    break;
                default:
                    m_drawRegion->setAttribute(Qt::WA_TransparentForMouseEvents, false);
            }
               QCursor cursor = m_drawRegion->setTabletDevice(static_cast<QTabletEvent *>(event));
               setOverrideCursor(cursor);
               if(!m_drawRegion->isClear()){
                m_drawRegion->setSaveState(false);
               }
               return true;
       }
       return QApplication::event(event);
}

void PdfAnnotatorApp::setDrawRegion(TabletCanvas *canvas){
    m_drawRegion = canvas;
}
