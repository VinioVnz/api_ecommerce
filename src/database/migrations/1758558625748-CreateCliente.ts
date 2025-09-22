import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCliente1758558625748 implements MigrationInterface {
    name = 'CreateCliente1758558625748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Cliente\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(50) NOT NULL, \`email\` varchar(120) NOT NULL, \`cpf\` varchar(11) NOT NULL, \`senha\` varchar(50) NOT NULL, \`telefone\` varchar(13) NOT NULL, UNIQUE INDEX \`IDX_c232132fbbe41fae9cc5b7d651\` (\`email\`), UNIQUE INDEX \`IDX_486e8ec7437b6a1f8dce55750b\` (\`cpf\`), UNIQUE INDEX \`IDX_b501a6264456aeb569174968f6\` (\`senha\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_b501a6264456aeb569174968f6\` ON \`Cliente\``);
        await queryRunner.query(`DROP INDEX \`IDX_486e8ec7437b6a1f8dce55750b\` ON \`Cliente\``);
        await queryRunner.query(`DROP INDEX \`IDX_c232132fbbe41fae9cc5b7d651\` ON \`Cliente\``);
        await queryRunner.query(`DROP TABLE \`Cliente\``);
    }

}
