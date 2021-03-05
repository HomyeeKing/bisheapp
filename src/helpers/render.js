const btn = document.querySelector('.btn')
const {ipcRenderer} = require('electron')
btn.addEventListener('click',()=>{
    ipcRenderer.send('perforn','hello')
})