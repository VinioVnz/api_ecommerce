import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('endereco')
export class Endereco{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    municipio!:string;

    @Column({type:"char", length: 2})
    uf!:string;

    @Column({type: "varchar"})
    logradouro!:string

    @Column({type: "varchar",length:11})
    cep!:string

    @Column({type: "int"})
    numero!:number
}
