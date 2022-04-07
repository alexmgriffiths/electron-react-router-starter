const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('app', {
    sayHello: (args) => ipcRenderer.invoke("say-hello", args)
})