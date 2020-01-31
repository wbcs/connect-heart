const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

const createMenu = require('./menu')
let window = null

const createWindow = () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    // titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
      // devTools: true
    }
  })
}
const oepnWindow = () => {
  if (process.env.NODE_ENV === 'development') {
    window.webContents.openDevTools()
    window.loadURL('http://localhost:8080')
  } else {
    window.loadURL(
      url.format({
        pathname: path.join(__dirname, '../dist/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }
}

app.once('ready', () => {
  createMenu()
  createWindow()
  oepnWindow()
  window.once('closed', () => (window = null))
})

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true

app.on('window-all-closed', () => app.quit())
