import { AppDataSource } from "../database/data-source";
import { Endereco } from "../database/entities/Endereco";

const repo = AppDataSource.getRepository(Endereco);

export const EnderecoService = {
    async getAll(): Promise<Endereco[]>{
        return repo.find()
    },

    async getOne(id: number): Promise<Endereco | null>{
        return repo.findOne({where: {id}});
    },

    async create(data: Partial<Endereco>): Promise<Endereco>{
         const endereco = repo.create(data);
         await repo.save(endereco);
         return endereco;
    },

    async delete(id: number): Promise<Endereco | null>{
        const endereco = await repo.findOne({where: {id}})
        if(!endereco)
            return null;
        
        await repo.delete(endereco);
        return endereco;
    },

    async update(id: number, data: Partial<Endereco>): Promise<Endereco | null>{
        const endereco = await repo.findOne({where: {id}})
        if(!endereco){
            return null;
        }
        const enderecoAtualizado =  repo.merge(endereco,data)
        await repo.save(enderecoAtualizado) 
        return enderecoAtualizado;
    }

}