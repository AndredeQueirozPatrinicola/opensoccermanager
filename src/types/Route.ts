export type Route = {
    path: string,
    params: {},
    handler: {
        function: ({ connection, query }) => Promise<any[]>,
        args: any
    }
}