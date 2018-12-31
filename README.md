# pdf-marker
Lightweight Material PDF Annotator written using Qt/C++

## Troubleshooting (Users, Developers)
### Windows

* I have a Wacom or other name brand tablet -- My tablet isn't being recognized:
Some newer Wacom drivers don't include a wintab32.dll file which is necessary for Qt to receive tablet input.
Driver 6.3.31-4 is the newest Wacom driver (09/18) that officially supports this software. Download here: http://cdn.wacom.com/u/productsupport/drivers/win/professional/WacomTablet_6.3.31-4.exe

* I have a cheap tablet -- My tablet isn't being recognized:
Some cheaper tablets have software that introduce bugs in the Wintab driver. (E.g. Adesso, Aiptek, Genius, Peritab, Trust)
Memory allocation isn't handled properly by the drivers that come with these tablets, so these tablets aren't supported. (Sorry)

## Building

Use `git clone https://github.com/nagilson/pdf-marker/` to clone.
Open Qt Creator and click `Open Project`, then locate the clone and open the .pro file.

External Dependencies / Credits:
* ColorWheel (Square Dialogue Wheel): https://github.com/liuyanghejerry/Qt-Plus liuyanghejerry\
 ... This comes with the project, and you won't need to do anything special to build it. 

* QtLabs-QtPDF (PDF Viewer): http://code.qt.io/cgit/qt-labs/qtpdf.git Qt\
 ... Follow the build instructions at http://blog.qt.io/blog/2017/01/30/new-qtpdf-qtlabs-module/.

### Troubleshooting
#### Windows

* When I build the program, I get `Unable to set queue size on tablet. The tablet will not work`?
Build using MSVC2017 and not MinGW.
If you didn't add MSVC during installation, open the QT Maintenance Tool and then
add the component.
