import { DataSource } from "typeorm";
import { getPlayers } from "../data/selectors/getPlayer";
import { Route } from "../types/Route";


export function createRoutes(dataSource: DataSource): Route[]{
    console.log(dataSource)
    return [
        {
            "path": "players/",
            "params": {},
            "handler": {
                "function": getPlayers,
                "args": [dataSource, "*"]
            }
        }
    ]
}