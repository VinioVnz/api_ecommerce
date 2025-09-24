import { AppDataSource } from "../database/data-source"
import { Cliente } from "../database/entities/Cliente";
const bcript = require('bcrypt')
const saltRounds = 10

type ClienteRetorno = {
    id: number,
    nome: string,
    email: string,
    cpf: string,
    telefone: string
}
const repo = AppDataSource.getRepository(Cliente);
export const ClienteService = {
    async getAll(): Promise<ClienteRetorno[]> {
        return repo.find({
            select: ['id', 'nome', 'email', 'cpf', 'telefone']
        });

    },

    async getOne(id: number): Promise<ClienteRetorno | null> {
        return repo.findOne({
            where: { id },
            select: ['id', 'nome', 'email', 'cpf', 'telefone']
        })
    },

    async create(data: Partial<Cliente>): Promise<ClienteRetorno> {
        data.senha = await bcript.hash(data.senha, saltRounds)
        const cliente = repo.create(data);
        await repo.save(cliente)
        return {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            telefone: cliente.telefone
        };
    },

    async update(data: Partial<Cliente>, id: number): Promise<ClienteRetorno | null> {
        const cliente = await repo.findOneBy({ id });
        if (!cliente) {
            return null;
        }
        repo.merge(cliente, data)
        await repo.save(cliente);
        return {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            telefone: cliente.telefone
        };
    },

    async delete(id: number): Promise<ClienteRetorno | null> {
        const cliente = await repo.findOneBy({ id });
        if (!cliente) {
            return null;
        }
        await repo.remove(cliente);
        return {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            telefone: cliente.telefone
        };
    }
}