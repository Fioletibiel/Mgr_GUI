//import {PythonShell} from 'python-shell';
const {app, BrowserWindow} = require('electron');
const path = require('path');
//const {PythonShell} = require('python-shell');
//const system = require('system-commands');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#333333', // '#999999', '#312450',
    show: false,
    center: true,
    useContentSize: true,
    //fullscreen: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "images/icon.png"),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      //nodeIntegration: false
    }
  });

  //mainWindow.webContents.openDevTools();

  mainWindow.loadFile('index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  });

  mainWindow.on('closed', function () {
    mainWindow = null
  });
}


// PythonShell.run('my_script.py', null, function (err) {
//   if (err) throw err;
//   console.log('finished');
// });

app.on('ready', createWindow);


app.on('window-all-closed', function () {
  app.quit()
});

app.on('activate', function () {
  if (mainWindow === null) createWindow()
});
