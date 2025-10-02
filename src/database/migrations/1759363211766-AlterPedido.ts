import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterPedido1759363211766 implements MigrationInterface {
    name = 'AlterPedido1759363211766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pedido\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`pedido\` ADD \`status\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pedido\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`pedido\` ADD \`status\` char NOT NULL`);
    }

}
