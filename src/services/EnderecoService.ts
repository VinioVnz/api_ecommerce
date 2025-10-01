import { AppDataSource } from "../database/data-source";
import { Cliente } from "../database/entities/Cliente";
import { Endereco } from "../database/entities/Endereco";

const repo = AppDataSource.getRepository(Endereco);
const clienteRepo = AppDataSource.getRepository(Cliente)


export const EnderecoService = {
    async getAll(): Promise<Endereco[]> {
        return await repo.find({
            relations: ["cliente"]
        })
    },

    async getOne(id: number): Promise<Endereco | null> {
        return await repo.findOne({ where: { id } });
    },

    async create(data: Partial<Endereco> & { cliente_id?: number }): Promise<Endereco | null> {
        if (!data.cliente_id) {
            return null;
        }

        const cliente = await clienteRepo.findOneBy({ id: data.cliente_id });
        if (!cliente) {
            return null;
        }
        const endereco = repo.create({ ...data, cliente });
        await repo.save(endereco);
        return endereco;
    },

    async delete(id: number): Promise<Endereco | null> {
        const endereco = await repo.findOne({ where: { id } })
        if (!endereco)
            return null;

        await repo.delete(endereco);
        return endereco;
    },

    async update(id: number, data: Partial<Endereco>): Promise<Endereco | null> {
        const endereco = await repo.preload({//preload é um merge e findOne junto
            id,
            ...data
        });

        if (!endereco) {
            return null; 
        }

        return await repo.save(endereco);
    }

}