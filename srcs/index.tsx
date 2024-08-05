const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        resizable: true
    })

    win.loadFile('./srcs/index.html');
}

app.whenReady().then(() => {
    createWindow();
})