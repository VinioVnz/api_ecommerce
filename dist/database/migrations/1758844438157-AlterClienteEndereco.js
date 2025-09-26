"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterClienteEndereco1758844438157 = void 0;
class AlterClienteEndereco1758844438157 {
    constructor() {
        this.name = 'AlterClienteEndereco1758844438157';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`endereco\` ADD \`cliente_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`endereco\` ADD CONSTRAINT \`FK_f116cbb13e811209d3a4953eba0\` FOREIGN KEY (\`cliente_id\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`endereco\` DROP FOREIGN KEY \`FK_f116cbb13e811209d3a4953eba0\``);
        await queryRunner.query(`ALTER TABLE \`endereco\` DROP COLUMN \`cliente_id\``);
    }
}
exports.AlterClienteEndereco1758844438157 = AlterClienteEndereco1758844438157;
