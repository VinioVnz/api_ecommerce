"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCliente1758506040382 = void 0;
const typeorm_1 = require("typeorm");
class CreateCliente1758506040382 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("Cliente");
    }
}
exports.CreateCliente1758506040382 = CreateCliente1758506040382;
