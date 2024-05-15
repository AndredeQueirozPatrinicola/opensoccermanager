// import { GetPlayerParams } from "../../types/GetPlayerParams";

import { Player } from "../entities/Player";

export const getPlayers = async ({ connection, query }): Promise<any[]> => {
    return await connection.query(query)
}