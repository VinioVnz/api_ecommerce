import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./Categoria";
import { ItemPedido } from "./ItemPedido";

@Entity('produto')
export class Produto {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar" })
    nome!: string;

    @Column({ type: "decimal", precision: 7, scale: 2 })
    preco!: number;

    @Column({ type: "varchar" })
    descricao!: string;

    @Column({ type: 'int' })
    estoque!: number;

    @Column({ type: "varchar" })
    url_foto!: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
    @JoinColumn({ name: "id_categoria" })
    categoria: Categoria

    @OneToMany(() => ItemPedido, item => item.produto)
    itens!: ItemPedido[];
}