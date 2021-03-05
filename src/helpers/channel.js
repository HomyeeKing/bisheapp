const {ipcMain} = require('electron')

ipcMain.on('perform',(...args)=>{
    console.log(...args);
})