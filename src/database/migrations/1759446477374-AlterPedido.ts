import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterPedido1759446477374 implements MigrationInterface {
    name = 'AlterPedido1759446477374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pedido\` CHANGE \`status\` \`status\` tinyint NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pedido\` CHANGE \`status\` \`status\` tinyint NOT NULL`);
    }

}
