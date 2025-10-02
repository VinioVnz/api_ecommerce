"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterPedido1759446477374 = void 0;
class AlterPedido1759446477374 {
    constructor() {
        this.name = 'AlterPedido1759446477374';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`pedido\` CHANGE \`status\` \`status\` tinyint NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`pedido\` CHANGE \`status\` \`status\` tinyint NOT NULL`);
    }
}
exports.AlterPedido1759446477374 = AlterPedido1759446477374;
