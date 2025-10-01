import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoriaProdutoAlterEndereco1759277025051 implements MigrationInterface {
    name = 'CreateCategoriaProdutoAlterEndereco1759277025051'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`endereco\` DROP FOREIGN KEY \`FK_f116cbb13e811209d3a4953eba0\``);
        await queryRunner.query(`ALTER TABLE \`endereco\` CHANGE \`cliente_id\` \`id_cliente\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`endereco\` ADD CONSTRAINT \`FK_ae7d86b22b6cfa1423ea30377cb\` FOREIGN KEY (\`id_cliente\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`endereco\` DROP FOREIGN KEY \`FK_ae7d86b22b6cfa1423ea30377cb\``);
        await queryRunner.query(`ALTER TABLE \`endereco\` CHANGE \`id_cliente\` \`cliente_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`endereco\` ADD CONSTRAINT \`FK_f116cbb13e811209d3a4953eba0\` FOREIGN KEY (\`cliente_id\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
