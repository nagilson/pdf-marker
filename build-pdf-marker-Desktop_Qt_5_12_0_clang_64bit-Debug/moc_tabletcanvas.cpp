/****************************************************************************
** Meta object code from reading C++ file 'tabletcanvas.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.12.0)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../src/tabletcanvas.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'tabletcanvas.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.12.0. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
QT_WARNING_PUSH
QT_WARNING_DISABLE_DEPRECATED
struct qt_meta_stringdata_TabletCanvas_t {
    QByteArrayData data[8];
    char stringdata0[78];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_TabletCanvas_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_TabletCanvas_t qt_meta_stringdata_TabletCanvas = {
    {
QT_MOC_LITERAL(0, 0, 12), // "TabletCanvas"
QT_MOC_LITERAL(1, 13, 8), // "Valuator"
QT_MOC_LITERAL(2, 22, 16), // "PressureValuator"
QT_MOC_LITERAL(3, 39, 10), // "NoValuator"
QT_MOC_LITERAL(4, 50, 4), // "Tool"
QT_MOC_LITERAL(5, 55, 3), // "Pen"
QT_MOC_LITERAL(6, 59, 6), // "Eraser"
QT_MOC_LITERAL(7, 66, 11) // "Highlighter"

    },
    "TabletCanvas\0Valuator\0PressureValuator\0"
    "NoValuator\0Tool\0Pen\0Eraser\0Highlighter"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_TabletCanvas[] = {

 // content:
       8,       // revision
       0,       // classname
       0,    0, // classinfo
       0,    0, // methods
       0,    0, // properties
       2,   14, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // enums: name, alias, flags, count, data
       1,    1, 0x0,    2,   24,
       4,    4, 0x0,    3,   28,

 // enum data: key, value
       2, uint(TabletCanvas::PressureValuator),
       3, uint(TabletCanvas::NoValuator),
       5, uint(TabletCanvas::Pen),
       6, uint(TabletCanvas::Eraser),
       7, uint(TabletCanvas::Highlighter),

       0        // eod
};

void TabletCanvas::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    Q_UNUSED(_o);
    Q_UNUSED(_id);
    Q_UNUSED(_c);
    Q_UNUSED(_a);
}

QT_INIT_METAOBJECT const QMetaObject TabletCanvas::staticMetaObject = { {
    &QWidget::staticMetaObject,
    qt_meta_stringdata_TabletCanvas.data,
    qt_meta_data_TabletCanvas,
    qt_static_metacall,
    nullptr,
    nullptr
} };


const QMetaObject *TabletCanvas::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *TabletCanvas::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_TabletCanvas.stringdata0))
        return static_cast<void*>(this);
    return QWidget::qt_metacast(_clname);
}

int TabletCanvas::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QWidget::qt_metacall(_c, _id, _a);
    return _id;
}
QT_WARNING_POP
QT_END_MOC_NAMESPACE
