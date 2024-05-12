import React from "react";

import { WebContentMessage } from "../../../types/WebContentMessage";

type UseQueryParams = {
    query: string,
    setter: React.Dispatch<React.SetStateAction<any>>
}

export const useQuery = ({ query, setter}: UseQueryParams) => {
    window.electron.ipcRenderer.send('query', {
        query: query
    })
    window.electron.ipcRenderer.on('query-result', (event, result: WebContentMessage) => {
        if(result.status){
            setter(result.data)
        }else{
            throw Error("The result was not setted")
        }
    });
}