import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCliente1758506040382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Cliente",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: "50",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "120",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        length: "11",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "senha",
                        type: "varchar",
                        length: "50",
                        isNullable: false
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        length: "13",
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Cliente");
    }

}
