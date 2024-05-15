import { executer } from "../data/selectors/executer";
import { Route } from "../types/Route";


export function createRoutes(connection:any): Route[]{
    return [
        {
            "path": "players/",
            "params": {},
            "handler": {
                "function": executer,
                "args": [connection, "SELECT * FROM PLAYER;"]
            }
        }
    ]
}