"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCliente1758844122602 = void 0;
class CreateCliente1758844122602 {
    constructor() {
        this.name = 'CreateCliente1758844122602';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_486e8ec7437b6a1f8dce55750b\` ON \`cliente\``);
        await queryRunner.query(`DROP INDEX \`IDX_b501a6264456aeb569174968f6\` ON \`cliente\``);
        await queryRunner.query(`DROP INDEX \`IDX_c232132fbbe41fae9cc5b7d651\` ON \`cliente\``);
        await queryRunner.query(`CREATE TABLE \`endereco\` (\`id\` int NOT NULL AUTO_INCREMENT, \`municipio\` varchar(255) NOT NULL, \`uf\` char(2) NOT NULL, \`logradouro\` varchar(255) NOT NULL, \`cep\` varchar(11) NOT NULL, \`numero\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cliente\` ADD UNIQUE INDEX \`IDX_503f81286c5e49acd6a832abf4\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`cliente\` ADD UNIQUE INDEX \`IDX_980ea33e938c719bbababe4352\` (\`cpf\`)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`cliente\` DROP INDEX \`IDX_980ea33e938c719bbababe4352\``);
        await queryRunner.query(`ALTER TABLE \`cliente\` DROP INDEX \`IDX_503f81286c5e49acd6a832abf4\``);
        await queryRunner.query(`DROP TABLE \`endereco\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_c232132fbbe41fae9cc5b7d651\` ON \`cliente\` (\`email\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_b501a6264456aeb569174968f6\` ON \`cliente\` (\`senha\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_486e8ec7437b6a1f8dce55750b\` ON \`cliente\` (\`cpf\`)`);
    }
}
exports.CreateCliente1758844122602 = CreateCliente1758844122602;
