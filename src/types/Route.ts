import { DataSource } from "typeorm"

export type Route = {
    path: string,
    params: {},
    handler: {
        function: ({ dataSource, select, where }) => Promise<any[]>,
        args: any
    }
}