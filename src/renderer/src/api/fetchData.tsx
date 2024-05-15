

export const fetchData = (endpoint: string) => {
    return new Promise((resolve, reject) => {
        window.electron.ipcRenderer.send('query', {
            query: endpoint
        });

        window.electron.ipcRenderer.on('query-result', (event, result) => {
            if (result.status) {
                resolve(result.data);
            } else {
                reject(new Error("The result was not set"));
            }
        });
    });
};