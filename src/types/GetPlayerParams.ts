import { DataSource } from 'typeorm';

export type GetPlayerParams = {
    dataSource: DataSource,
    select: string,
    where: string
}