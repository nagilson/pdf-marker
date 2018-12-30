/****************************************************************************
** Meta object code from reading C++ file 'qpdfwidget.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.12.0)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../src/lib/qpdflib/qpdfwidget.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'qpdfwidget.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.12.0. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
QT_WARNING_PUSH
QT_WARNING_DISABLE_DEPRECATED
struct qt_meta_stringdata_QPdfWidget_t {
    QByteArrayData data[10];
    char stringdata0[117];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_QPdfWidget_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_QPdfWidget_t qt_meta_stringdata_QPdfWidget = {
    {
QT_MOC_LITERAL(0, 0, 10), // "QPdfWidget"
QT_MOC_LITERAL(1, 11, 11), // "initialized"
QT_MOC_LITERAL(2, 23, 0), // ""
QT_MOC_LITERAL(3, 24, 17), // "pdfDocumentLoaded"
QT_MOC_LITERAL(4, 42, 14), // "onLoadFinished"
QT_MOC_LITERAL(5, 57, 6), // "status"
QT_MOC_LITERAL(6, 64, 13), // "renderPdfData"
QT_MOC_LITERAL(7, 78, 13), // "renderPdfFile"
QT_MOC_LITERAL(8, 92, 4), // "file"
QT_MOC_LITERAL(9, 97, 19) // "onRenderPdfFinished"

    },
    "QPdfWidget\0initialized\0\0pdfDocumentLoaded\0"
    "onLoadFinished\0status\0renderPdfData\0"
    "renderPdfFile\0file\0onRenderPdfFinished"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_QPdfWidget[] = {

 // content:
       8,       // revision
       0,       // classname
       0,    0, // classinfo
       6,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       2,       // signalCount

 // signals: name, argc, parameters, tag, flags
       1,    0,   44,    2, 0x06 /* Public */,
       3,    0,   45,    2, 0x06 /* Public */,

 // slots: name, argc, parameters, tag, flags
       4,    1,   46,    2, 0x08 /* Private */,
       6,    0,   49,    2, 0x08 /* Private */,
       7,    1,   50,    2, 0x08 /* Private */,
       9,    0,   53,    2, 0x08 /* Private */,

 // signals: parameters
    QMetaType::Void,
    QMetaType::Void,

 // slots: parameters
    QMetaType::Void, QMetaType::Bool,    5,
    QMetaType::Void,
    QMetaType::Void, QMetaType::QString,    8,
    QMetaType::Void,

       0        // eod
};

void QPdfWidget::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        QPdfWidget *_t = static_cast<QPdfWidget *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->initialized(); break;
        case 1: _t->pdfDocumentLoaded(); break;
        case 2: _t->onLoadFinished((*reinterpret_cast< bool(*)>(_a[1]))); break;
        case 3: _t->renderPdfData(); break;
        case 4: _t->renderPdfFile((*reinterpret_cast< const QString(*)>(_a[1]))); break;
        case 5: _t->onRenderPdfFinished(); break;
        default: ;
        }
    } else if (_c == QMetaObject::IndexOfMethod) {
        int *result = reinterpret_cast<int *>(_a[0]);
        {
            using _t = void (QPdfWidget::*)();
            if (*reinterpret_cast<_t *>(_a[1]) == static_cast<_t>(&QPdfWidget::initialized)) {
                *result = 0;
                return;
            }
        }
        {
            using _t = void (QPdfWidget::*)();
            if (*reinterpret_cast<_t *>(_a[1]) == static_cast<_t>(&QPdfWidget::pdfDocumentLoaded)) {
                *result = 1;
                return;
            }
        }
    }
}

QT_INIT_METAOBJECT const QMetaObject QPdfWidget::staticMetaObject = { {
    &QWidget::staticMetaObject,
    qt_meta_stringdata_QPdfWidget.data,
    qt_meta_data_QPdfWidget,
    qt_static_metacall,
    nullptr,
    nullptr
} };


const QMetaObject *QPdfWidget::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *QPdfWidget::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_QPdfWidget.stringdata0))
        return static_cast<void*>(this);
    return QWidget::qt_metacast(_clname);
}

int QPdfWidget::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QWidget::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 6)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 6;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 6)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 6;
    }
    return _id;
}

// SIGNAL 0
void QPdfWidget::initialized()
{
    QMetaObject::activate(this, &staticMetaObject, 0, nullptr);
}

// SIGNAL 1
void QPdfWidget::pdfDocumentLoaded()
{
    QMetaObject::activate(this, &staticMetaObject, 1, nullptr);
}
QT_WARNING_POP
QT_END_MOC_NAMESPACE
