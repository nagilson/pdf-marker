#-------------------------------------------------
#
# Project created by QtCreator 2018-12-26T14:31:15
#
#-------------------------------------------------

QT       += core gui
QT += webenginewidgets
INCLUDEPATH += /src/lib/3rdparty/qpdfjs/src

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = pdf-marker
TEMPLATE = app

# The following define makes your compiler emit warnings if you use
# any feature of Qt which has been marked as deprecated (the exact warnings
# depend on your compiler). Please consult the documentation of the
# deprecated API in order to know how to port your code away from it.
DEFINES += QT_DEPRECATED_WARNINGS

# You can also make your code fail to compile if you use deprecated APIs.
# In order to do so, uncomment the following line.
# You can also select to disable deprecated APIs only up to a certain version of Qt.
#DEFINES += QT_DISABLE_DEPRECATED_BEFORE=0x060000    # disables all the APIs deprecated before Qt 6.0.0

CONFIG += c++11

SOURCES += \
        main.cpp \
        mainwindow.cpp \
    tabletcanvas.cpp \
    pdfannotatorapp.cpp \
    lib/colorwheel.cpp \
    menu_extra/colorpickerswatch.cpp \
    lib/3rdparty/qpdfjs/release/moc_communicator.cpp \
    lib/3rdparty/qpdfjs/release/moc_qpdfjswindow.cpp \
    lib/3rdparty/qpdfjs/src/communicator.cpp \
    lib/3rdparty/qpdfjs/src/qpdfjswindow.cpp \
    lib/colorwheel.cpp \
    menu_extra/colorpickerswatch.cpp \
    main.cpp \
    mainwindow.cpp \
    pdfannotatorapp.cpp \
    tabletcanvas.cpp

HEADERS += \
        mainwindow.h \
    tabletcanvas.h \
    pdfannotatorapp.h \
    lib/colorwheel.h \
    menu_extra/colorpickerswatch.h \
    lib/3rdparty/qpdfjs/release/moc_predefs.h \
    lib/3rdparty/qpdfjs/src/communicator.h \
    lib/3rdparty/qpdfjs/src/qpdfjswindow.h \
    lib/colorwheel.h \
    menu_extra/colorpickerswatch.h \
    mainwindow.h \
    pdfannotatorapp.h \
    tabletcanvas.h

FORMS += \
        mainwindow.ui \
    menu_extra/colorpickerswatch.ui

# Default rules for deployment.
qnx: target.path = /tmp/$${TARGET}/bin
else: unix:!android: target.path = /opt/$${TARGET}/bin
!isEmpty(target.path): INSTALLS += target

RESOURCES += \
    images.qrc

DISTFILES += \
    lib/3rdparty/qpdfjs/empty.pdf \
    empty.pdf
