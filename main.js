const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path')
const url = require('url')
const pkg = require('./package.json') // 引用package.json

// 保持一个对于 window 对象的全局引用，如果你不这样做，
// 当 JavaScript 对象被垃圾回收， window 会被自动地关闭
let mainWindow;

function createWindow () {
  //创建一个 800x600 的浏览器窗口
  mainWindow = new BrowserWindow({width: 800, height: 600});

  //加载应用的界面文件
  // mainWindow.loadURL(`file://${__dirname}/index.html`);

  //使用了react的方式
  // mainWindow.loadURL(url.format({
  //     pathname: path.join(__dirname, './build/index.html'),
  //     protocol: 'file:',
  //     slashes: true }));

  //热加载的模式
  //判断是否是开发模式
  if(pkg.DEV) {
    //开发模式下 进行热调试
      mainWindow.loadURL("http://localhost:8080/")
  } else {
      //发布模式下
      mainWindow.loadURL(url.format({
        pathname:path.join(__dirname, './index.html'),
        protocol:'file:',
        slashes:true
    }))
   }
  //打开开发者工具，方便调试
  //mainWindow.webContents.openDevTools();

    // 当 window 被关闭，这个事件会被触发。
  mainWindow.on('closed', function () {
      // 取消引用 window 对象，如果你的应用支持多窗口的话，
      // 通常会把多个 window 对象存放在一个数组里面，
      // 与此同时，你应该删除相应的元素。
    mainWindow = null;
  });
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow);

app.on('window-all-closed', function () {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
  if (mainWindow === null) {
    createWindow();
  }
});
