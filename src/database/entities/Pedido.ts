import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { ItemPedido } from "./ItemPedido";

@Entity('pedido')
export class Pedido {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    data_pedido!: Date

    @Column({ type: "tinyint", default: 0 })
    status!: number

    @Column({ type: 'decimal', scale: 2, precision: 7 })
    total!: number

    @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
    @JoinColumn({ name: 'id_cliente' })
    cliente!: Cliente

    @OneToMany(() => ItemPedido, item => item.pedido, { cascade: true })
    itens!: ItemPedido[];
}