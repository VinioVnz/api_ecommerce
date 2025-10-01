"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoriaProdutoAlterEndereco1759277025051 = void 0;
class CreateCategoriaProdutoAlterEndereco1759277025051 {
    constructor() {
        this.name = 'CreateCategoriaProdutoAlterEndereco1759277025051';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`endereco\` DROP FOREIGN KEY \`FK_f116cbb13e811209d3a4953eba0\``);
        await queryRunner.query(`ALTER TABLE \`endereco\` CHANGE \`cliente_id\` \`id_cliente\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`endereco\` ADD CONSTRAINT \`FK_ae7d86b22b6cfa1423ea30377cb\` FOREIGN KEY (\`id_cliente\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`endereco\` DROP FOREIGN KEY \`FK_ae7d86b22b6cfa1423ea30377cb\``);
        await queryRunner.query(`ALTER TABLE \`endereco\` CHANGE \`id_cliente\` \`cliente_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`endereco\` ADD CONSTRAINT \`FK_f116cbb13e811209d3a4953eba0\` FOREIGN KEY (\`cliente_id\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.CreateCategoriaProdutoAlterEndereco1759277025051 = CreateCategoriaProdutoAlterEndereco1759277025051;
