# pdf-marker
Lightweight Material PDF Annotator written using Qt/C++ 

## Troubleshooting (Users, Developers)
### Windows 

* I have a Wacom tablet -- My tablet isn't being recognized: 
Some newer Wacom drivers don't include a wintab32.dll file which is necessary for Qt to receive tablet input. 
Driver 6.3.31-4 is the newest Wacom driver (09/18) that officially supports this software. Download here: http://cdn.wacom.com/u/productsupport/drivers/win/professional/WacomTablet_6.3.31-4.exe

* I have a cheap tablet -- My tablet isn't being recognized: 
Some cheaper tablets have software that introduce bugs in the Wintab driver. (E.g. Adesso, Aiptek, Genius, Peritab, Trust) 
Memory allocation isn't handled properly by the drivers that come with these tablets, so these tablets aren't supported. (Sorry)

## Building 

Use `git clone` to clone. Open Qt Creator and make a new project -- set the name to `pdf-marker` and set the directory to the directory of the local git repo, but up a level. (The directory the repo folder is in.) 

External Dependencies: 


### Troubleshooting
#### Windows

* When I build the program, I get `Unable to set queue size on tablet. The tablet will not work`?
Make sure when you installed Qt you included not only the MinGW compiler but also MSVC2017, and run with that instead. 
