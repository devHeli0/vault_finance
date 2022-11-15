import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1668543019027 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Users",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varbinary",
                        isUnique: false
                    },
                    {
                        name: "accountId",
                        type: "uuid",
                        isUnique: true,
                        //Foreign key ?????????
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories")
    }

}
