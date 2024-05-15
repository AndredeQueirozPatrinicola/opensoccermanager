
export const quitGame = () => {
    return new Promise((resolve, reject) => {
        window.electron.ipcRenderer.send('quit-app')
    });
};

