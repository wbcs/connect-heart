const {
  app,
  BrowserWindow
} = require('electron')

// 保持一个对于 window 对象的全局引用，如果你不这样做，
// 当 JavaScript 对象被垃圾回收， window 会被自动地关闭
let win

// 打开主窗口
function createWindow() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const indexPageURL = 'http://localhost:8080'
  win.loadURL(indexPageURL);

  win.on('closed', () => {
    // 取消引用 window 对象
    win = null
  })
  win.webContents.openDevTools()
}

// Electron 会在创建浏览器窗口时调用这个函数。
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出
  // 否则绝大部分应用会保持激活
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


// "build": {
//   "productName": "wb-electron",
//   "appId": "wbingcs",
//   "directories": {
//     "output": "dist"
//   },
//   "copyright": "wbingcs",
//   "dmg": {
//     "contents": [
//       {
//         "x": 410,
//         "y": 150,
//         "type": "link",
//         "path": "/Applications"
//       },
//       {
//         "x": 130,
//         "y": 150,
//         "type": "file"
//       }
//     ]
//   }
// }