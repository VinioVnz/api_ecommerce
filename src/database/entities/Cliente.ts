import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cliente')
export class Cliente{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar", length: 50})
    nome!: string;

    @Column({type: "varchar", length: 120, unique: true})
    email!: string;

    @Column({type: "varchar", length:11, unique: true})
    cpf!: string;

    @Column({type: "varchar", length:50})
    senha!: string;

    @Column({type: "varchar", length:13})
    telefone!: string;
}