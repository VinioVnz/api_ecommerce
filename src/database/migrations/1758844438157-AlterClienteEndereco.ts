import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterClienteEndereco1758844438157 implements MigrationInterface {
    name = 'AlterClienteEndereco1758844438157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`endereco\` ADD \`cliente_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`endereco\` ADD CONSTRAINT \`FK_f116cbb13e811209d3a4953eba0\` FOREIGN KEY (\`cliente_id\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`endereco\` DROP FOREIGN KEY \`FK_f116cbb13e811209d3a4953eba0\``);
        await queryRunner.query(`ALTER TABLE \`endereco\` DROP COLUMN \`cliente_id\``);
    }

}
