#-------------------------------------------------
#
# Project created by QtCreator 2017-04-09T11:08:13
#
#-------------------------------------------------

QT += core gui widgets
QT += webenginewidgets

TARGET = qpdfjs
TEMPLATE = app

SOURCES +=\
	$$PWD/src/qpdfjs.cpp \
	$$PWD/src/qpdfjswindow.cpp \
    src/communicator.cpp

HEADERS  += \
	$$PWD/src/qpdfjswindow.h \
    src/communicator.h

DISTFILES += \
	minified/web/pdf.viewer.js \
	minified/web/qwebchannel.js \
	minified/web/viewer.html \
	minified/web/viewer.css \
    ../pdf.js/web/viewer.js \
    ../pdf.js/web/viewer.css \
    ../pdf.js/web/viewer.html


CONFIG += debug_and_release
!debug_and_release|build_pass {
	CONFIG(debug, debug|release) {
			TARGET = qpdfjsd
			DESTDIR = $$PWD
	 } else {
			TARGET = qpdfjs
			DESTDIR = $$PWD
	 }
}
