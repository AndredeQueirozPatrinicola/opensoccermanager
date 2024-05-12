import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlayer1715538759362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "player",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "age",
                    type: "int",
                },
                {
                    name: "position",
                    type: "varchar",
                },
                {
                    name: "strength",
                    type: "int",
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("player");
    }

}