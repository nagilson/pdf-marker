#include "qpdfjswindow.h"
#include "communicator.h"

#include <QTimer>
#include <QApplication>
#include <QWebEngineView>
#include <QWebChannel>
#include <QFile>
#include <QDir>
#include <QSettings>

QPdfJsWindow::QPdfJsWindow(QWidget *parent) :
    QWidget(parent)
{
    QString pdf_path = "E:/languages/C/pdf-marker/src/empty.pdf";
	QString app_path = qApp->applicationDirPath();
#ifdef Q_OS_MACOS
	QDir app_path_dir(app_path);
	app_path_dir.cdUp();
	app_path_dir.cdUp();
	app_path_dir.cdUp();
	app_path = app_path_dir.absolutePath();
#endif
    auto url = QUrl::fromLocalFile(app_path+"/lib/3rdparty/qpdfjs/minified/web/viewer.html");

    QDir dir(app_path);
	setWindowTitle(pdf_path);
    //pdf_path = dir.relativeFilePath(pdf_path);

	m_communicator = new Communicator(this);
	m_communicator->setUrl(pdf_path);

	m_webView = new QWebEngineView(this);

	QWebChannel * channel = new QWebChannel(this);
	channel->registerObject(QStringLiteral("communicator"), m_communicator);
	m_webView->page()->setWebChannel(channel);

	m_webView->load(url);
    QSettings s;
    int w = s.value("geomw", 1000).toInt();
    int h = s.value("geomh", 800).toInt();

    m_webView->show();
    m_webView->resize(w,h);
}

QPdfJsWindow::~QPdfJsWindow() {
}
