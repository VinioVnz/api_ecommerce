import { AppDataSource } from "../database/data-source"
import { Cliente } from "../database/entities/Cliente";

const repo = AppDataSource.getRepository(Cliente);
export const ClienteService = {
    async getAll(): Promise<Cliente[]> {
        return await repo.find();
    },
    
    async getOne(id: number): Promise<Cliente | null> {
        return await repo.findOneBy({id})
    },

    async create(data: Partial<Cliente>): Promise<Cliente> {
       const cliente = await repo.create(data);
       await repo.save(cliente)
       return cliente;
    },

    async update(data: Partial<Cliente>, id: number) : Promise<Cliente | null> {
        const cliente = await repo.findOneBy({id});
        if(!cliente){
            return null;
        }
        repo.merge(cliente,data)
        await repo.save(cliente);
        return cliente;
    },

    async delete(id: number): Promise<Cliente | null> {
        const cliente = await repo.findOneBy({id});
        if(!cliente) {
            return null;
        }
        await repo.remove(cliente);
        return cliente;
    }
}