import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoriaProduto1759277482374 implements MigrationInterface {
    name = 'CreateCategoriaProduto1759277482374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`categoria\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`descricao\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`produto\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`preco\` decimal(7,2) NOT NULL, \`descricao\` varchar(255) NOT NULL, \`estoque\` int NOT NULL, \`url_foto\` varchar(255) NOT NULL, \`id_categoria\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`produto\` ADD CONSTRAINT \`FK_b4b4301786e895495ebff7687a8\` FOREIGN KEY (\`id_categoria\`) REFERENCES \`categoria\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`produto\` DROP FOREIGN KEY \`FK_b4b4301786e895495ebff7687a8\``);
        await queryRunner.query(`DROP TABLE \`produto\``);
        await queryRunner.query(`DROP TABLE \`categoria\``);
    }

}
