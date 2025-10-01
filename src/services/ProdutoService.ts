import { AppDataSource } from "../database/data-source";
import { Produto } from "../database/entities/Produto";
const repo = AppDataSource.getRepository(Produto)

export const ProdutoService = {
    async getAll(): Promise<Produto[]>{
        return await repo.find({relations: ['categoria']})
    },
    async getOne(id: number): Promise<Produto | null>{
        return await repo.findOne({where: {id},relations: ['categoria']})
    },
    async create(data: Partial<Produto>): Promise<Produto>{
        const produto = repo.create(data)
        return await repo.save(produto)  
    },
    async delete(id: number): Promise<Produto | null>{
        const produto = await repo.findOne({where: {id}})
        if(!produto)
            return null
        await repo.remove(produto)
        return produto
    },
    async update(id: number, data: Partial<Produto>): Promise<Produto | null>{
        const produto = await repo.preload({
            id,
            ...data
        })
        if(!produto)
            return null
        return repo.save(produto)
        
    },
}