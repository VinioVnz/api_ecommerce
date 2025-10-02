"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePedido1759362589129 = void 0;
class CreatePedido1759362589129 {
    constructor() {
        this.name = 'CreatePedido1759362589129';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`pedido\` (\`id\` int NOT NULL AUTO_INCREMENT, \`data_pedido\` datetime NOT NULL, \`status\` char(1) NOT NULL, \`total\` decimal(7,2) NOT NULL, \`id_cliente\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pedido\` ADD CONSTRAINT \`FK_33471ba0a166506dbd244346ba6\` FOREIGN KEY (\`id_cliente\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`pedido\` DROP FOREIGN KEY \`FK_33471ba0a166506dbd244346ba6\``);
        await queryRunner.query(`DROP TABLE \`pedido\``);
    }
}
exports.CreatePedido1759362589129 = CreatePedido1759362589129;
