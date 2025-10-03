"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItemPedido1759447292452 = void 0;
class CreateItemPedido1759447292452 {
    constructor() {
        this.name = 'CreateItemPedido1759447292452';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`item_pedido\` (\`id_item\` int NOT NULL AUTO_INCREMENT, \`quantidade\` int NOT NULL, \`preco_uni\` int NOT NULL, \`id_pedido\` int NULL, \`id_produto\` int NULL, PRIMARY KEY (\`id_item\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`item_pedido\` ADD CONSTRAINT \`FK_b8a06a055ed50f426d61b625515\` FOREIGN KEY (\`id_pedido\`) REFERENCES \`pedido\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`item_pedido\` ADD CONSTRAINT \`FK_24b16ca61542e380e35a21303cd\` FOREIGN KEY (\`id_produto\`) REFERENCES \`produto\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`item_pedido\` DROP FOREIGN KEY \`FK_24b16ca61542e380e35a21303cd\``);
        await queryRunner.query(`ALTER TABLE \`item_pedido\` DROP FOREIGN KEY \`FK_b8a06a055ed50f426d61b625515\``);
        await queryRunner.query(`DROP TABLE \`item_pedido\``);
    }
}
exports.CreateItemPedido1759447292452 = CreateItemPedido1759447292452;
