import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";

@Entity('pedido')
export class Pedido{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    data_pedido!: Date

    @Column({type: "tinyint"})
    status!: number

    @Column({type: 'decimal', scale:2, precision:7})
    total!: number

    @ManyToOne(() => Cliente, (cliente)=> cliente.pedidos)
    @JoinColumn({name: 'id_cliente'})
    cliente!: Cliente

}