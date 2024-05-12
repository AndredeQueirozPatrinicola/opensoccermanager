import { GetPlayerParams } from "../../types/GetPlayerParams";

import { Player } from "../entities/Player";

export const getPlayers = async ({ dataSource, select }: GetPlayerParams): Promise<any[]> => {
    console.log(`>>>> ${dataSource}`)
    return await dataSource
        .createQueryBuilder(Player, "Player")
        .getMany();
}