import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Endereco } from "./Endereco";

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

    @OneToMany(() => Endereco, (endereco) => endereco.cliente)
    enderecos!: Endereco[];
}