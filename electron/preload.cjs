const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("nun", {
	findDiscordInstalls: () => ipcRenderer.invoke("nun:findDiscordInstalls"),
	install: (resourcesPath) => ipcRenderer.invoke("nun:install", resourcesPath),
	uninstall: (resourcesPath) =>
		ipcRenderer.invoke("nun:uninstall", resourcesPath),
	onProgress: (callback) => {
		const listener = (_event, update) => callback(update);
		ipcRenderer.on("nun:progress", listener);
		return () => ipcRenderer.removeListener("nun:progress", listener);
	},
	closeWindow: () => ipcRenderer.send("window:close"),
});
