import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "./Produto";

@Entity('categoria')
export class Categoria{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type:"varchar"})
    nome!: string;

    @Column({type: "varchar"})
    descricao!: string;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos!: Produto[];
}