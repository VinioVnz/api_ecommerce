import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";

@Entity('endereco')
export class Endereco {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar" })
    municipio!: string;

    @Column({ type: "char", length: 2 })
    uf!: string;

    @Column({ type: "varchar" })
    logradouro!: string

    @Column({ type: "varchar", length: 11 })
    cep!: string

    @Column({ type: "int" })
    numero!: number

    @ManyToOne(() => Cliente, (cliente) => cliente.enderecos)
    @JoinColumn({ name: "cliente_id" })
    cliente!: Cliente;
}
