export const executer = async ({ connection, query }): Promise<any[]> => {
    return await connection.query(query)
}