#ifndef QPdfJsWindow_H
#define QPdfJsWindow_H

#include <QWidget>

class QWebEngineView;
class Communicator;

class QPdfJsWindow : public QWidget {
	Q_OBJECT
	QWebEngineView * m_webView;
	Communicator * m_communicator;
public:
    explicit QPdfJsWindow(QWidget *parent = nullptr);
	~QPdfJsWindow();
};

#endif
