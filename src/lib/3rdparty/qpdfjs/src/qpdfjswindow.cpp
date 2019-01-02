#include "qpdfjswindow.h"
#include "communicator.h"

#include <QTimer>
#include <QApplication>
#include <QWebEngineView>
#include <QWebChannel>
#include <QFile>
#include <QSettings>

QPdfJsWindow::QPdfJsWindow(QWidget *parent) :
    QWidget(parent)
{
    m_communicator = new Communicator(this); // delete handled by Qt
    m_webView = new QWebEngineView(this); // delete handled by Qt
}

QPdfJsWindow::~QPdfJsWindow() {
    ;
}

void QPdfJsWindow::redirect(const QString& pdf_path){
    QString app_path = qApp->applicationDirPath();
#ifdef Q_OS_MACOS
        QDir app_path_dir(app_path);
        app_path_dir.cdUp();
        app_path_dir.cdUp();
        app_path_dir.cdUp();
        app_path = app_path_dir.absolutePath();
#endif
    auto url = QUrl::fromLocalFile(app_path+"/lib/3rdparty/qpdfjs/minified/web/viewer.html");
    m_communicator->setUrl(pdf_path);

    QWebChannel * channel = new QWebChannel(this);
    channel->registerObject(QStringLiteral("communicator"), m_communicator);
    m_webView->page()->setWebChannel(channel);

    m_webView->load(url);
    m_webView->show();
    m_webView->resize(1000, 800);
}

bool QPdfJsWindow::activated(){
    return m_webView->url() != QUrl();
}
