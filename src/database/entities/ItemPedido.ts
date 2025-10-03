import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Pedido } from "./Pedido";
import { Produto } from "./Produto";

@Entity("item_pedido")
export class ItemPedido {
  @PrimaryGeneratedColumn()
  id_item!: number;

  @Column()
  quantidade!: number;

  @Column()
  preco_uni!: number;

  @ManyToOne(() => Pedido, pedido => pedido.itens, { onDelete: "CASCADE" })
  @JoinColumn({ name: "id_pedido" })
  pedido!: Pedido;

  @ManyToOne(() => Produto, produto => produto.itens, { eager: true })
  @JoinColumn({ name: "id_produto" })
  produto!: Produto;
}