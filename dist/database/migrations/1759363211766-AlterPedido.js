"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterPedido1759363211766 = void 0;
class AlterPedido1759363211766 {
    constructor() {
        this.name = 'AlterPedido1759363211766';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`pedido\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`pedido\` ADD \`status\` tinyint NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`pedido\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`pedido\` ADD \`status\` char NOT NULL`);
    }
}
exports.AlterPedido1759363211766 = AlterPedido1759363211766;
