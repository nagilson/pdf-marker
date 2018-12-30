/****************************************************************************
** Meta object code from reading C++ file 'pdfjsbridge.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.12.0)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../src/lib/qpdflib/pdfjsbridge.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'pdfjsbridge.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.12.0. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
QT_WARNING_PUSH
QT_WARNING_DISABLE_DEPRECATED
struct qt_meta_stringdata_PdfJsBridge_t {
    QByteArrayData data[6];
    char stringdata0[61];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_PdfJsBridge_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_PdfJsBridge_t qt_meta_stringdata_PdfJsBridge = {
    {
QT_MOC_LITERAL(0, 0, 11), // "PdfJsBridge"
QT_MOC_LITERAL(1, 12, 11), // "initialized"
QT_MOC_LITERAL(2, 24, 0), // ""
QT_MOC_LITERAL(3, 25, 17), // "pdfDocumentloaded"
QT_MOC_LITERAL(4, 43, 14), // "onLoadFinished"
QT_MOC_LITERAL(5, 58, 2) // "ok"

    },
    "PdfJsBridge\0initialized\0\0pdfDocumentloaded\0"
    "onLoadFinished\0ok"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_PdfJsBridge[] = {

 // content:
       8,       // revision
       0,       // classname
       0,    0, // classinfo
       3,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       2,       // signalCount

 // signals: name, argc, parameters, tag, flags
       1,    0,   29,    2, 0x06 /* Public */,
       3,    0,   30,    2, 0x06 /* Public */,

 // slots: name, argc, parameters, tag, flags
       4,    1,   31,    2, 0x08 /* Private */,

 // signals: parameters
    QMetaType::Void,
    QMetaType::Void,

 // slots: parameters
    QMetaType::Void, QMetaType::Bool,    5,

       0        // eod
};

void PdfJsBridge::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        PdfJsBridge *_t = static_cast<PdfJsBridge *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->initialized(); break;
        case 1: _t->pdfDocumentloaded(); break;
        case 2: _t->onLoadFinished((*reinterpret_cast< bool(*)>(_a[1]))); break;
        default: ;
        }
    } else if (_c == QMetaObject::IndexOfMethod) {
        int *result = reinterpret_cast<int *>(_a[0]);
        {
            using _t = void (PdfJsBridge::*)();
            if (*reinterpret_cast<_t *>(_a[1]) == static_cast<_t>(&PdfJsBridge::initialized)) {
                *result = 0;
                return;
            }
        }
        {
            using _t = void (PdfJsBridge::*)();
            if (*reinterpret_cast<_t *>(_a[1]) == static_cast<_t>(&PdfJsBridge::pdfDocumentloaded)) {
                *result = 1;
                return;
            }
        }
    }
}

QT_INIT_METAOBJECT const QMetaObject PdfJsBridge::staticMetaObject = { {
    &QWebEngineView::staticMetaObject,
    qt_meta_stringdata_PdfJsBridge.data,
    qt_meta_data_PdfJsBridge,
    qt_static_metacall,
    nullptr,
    nullptr
} };


const QMetaObject *PdfJsBridge::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *PdfJsBridge::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_PdfJsBridge.stringdata0))
        return static_cast<void*>(this);
    return QWebEngineView::qt_metacast(_clname);
}

int PdfJsBridge::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QWebEngineView::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 3)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 3;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 3)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 3;
    }
    return _id;
}

// SIGNAL 0
void PdfJsBridge::initialized()
{
    QMetaObject::activate(this, &staticMetaObject, 0, nullptr);
}

// SIGNAL 1
void PdfJsBridge::pdfDocumentloaded()
{
    QMetaObject::activate(this, &staticMetaObject, 1, nullptr);
}
struct qt_meta_stringdata_BridgeObject_t {
    QByteArrayData data[7];
    char stringdata0[80];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_BridgeObject_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_BridgeObject_t qt_meta_stringdata_BridgeObject = {
    {
QT_MOC_LITERAL(0, 0, 12), // "BridgeObject"
QT_MOC_LITERAL(1, 13, 13), // "jsInitialized"
QT_MOC_LITERAL(2, 27, 0), // ""
QT_MOC_LITERAL(3, 28, 20), // "jsReportDestinations"
QT_MOC_LITERAL(4, 49, 12), // "destinations"
QT_MOC_LITERAL(5, 62, 8), // "jsLoaded"
QT_MOC_LITERAL(6, 71, 8) // "jsClosed"

    },
    "BridgeObject\0jsInitialized\0\0"
    "jsReportDestinations\0destinations\0"
    "jsLoaded\0jsClosed"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_BridgeObject[] = {

 // content:
       8,       // revision
       0,       // classname
       0,    0, // classinfo
       4,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: name, argc, parameters, tag, flags
       1,    0,   34,    2, 0x0a /* Public */,
       3,    1,   35,    2, 0x0a /* Public */,
       5,    0,   38,    2, 0x0a /* Public */,
       6,    0,   39,    2, 0x0a /* Public */,

 // slots: parameters
    QMetaType::Void,
    QMetaType::Void, QMetaType::QStringList,    4,
    QMetaType::Void,
    QMetaType::Void,

       0        // eod
};

void BridgeObject::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        BridgeObject *_t = static_cast<BridgeObject *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->jsInitialized(); break;
        case 1: _t->jsReportDestinations((*reinterpret_cast< const QStringList(*)>(_a[1]))); break;
        case 2: _t->jsLoaded(); break;
        case 3: _t->jsClosed(); break;
        default: ;
        }
    }
}

QT_INIT_METAOBJECT const QMetaObject BridgeObject::staticMetaObject = { {
    &QObject::staticMetaObject,
    qt_meta_stringdata_BridgeObject.data,
    qt_meta_data_BridgeObject,
    qt_static_metacall,
    nullptr,
    nullptr
} };


const QMetaObject *BridgeObject::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *BridgeObject::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_BridgeObject.stringdata0))
        return static_cast<void*>(this);
    return QObject::qt_metacast(_clname);
}

int BridgeObject::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QObject::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 4)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 4;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 4)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 4;
    }
    return _id;
}
QT_WARNING_POP
QT_END_MOC_NAMESPACE
