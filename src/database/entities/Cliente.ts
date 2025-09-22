import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cliente')
export class Cliente{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    email!: string;

    @Column()
    senha!: string;

    @Column()
    telefone!: string;
}