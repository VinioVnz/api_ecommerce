import { AppDataSource } from "../database/data-source"
import { Categoria } from "../database/entities/Categoria"

const repo = AppDataSource.getRepository(Categoria)

export const CategoriaService = {
    async getAll(): Promise<Categoria[]>{
        return await repo.find({relations:['produtos']});
    },
    async getOne(id: number): Promise<Categoria | null>{
        return await repo.findOne({
            where: {id},
            relations: ['produtos']
        }) 
    },
    async create(data: Partial<Categoria>): Promise<Categoria>{
        const categoria = repo.create(data);
        await repo.save(categoria)

        return categoria;
    },
    async delete(id: number): Promise<Categoria | null>{
        const categoria = await repo.findOne({where:{id}})
        if(!categoria)
            return null
        await repo.remove(categoria)
        return categoria;
    },
    async update(id: number, data: Partial<Categoria>): Promise<Categoria | null>{
        const categoria = await repo.preload({
            id,
            ...data
        })
        if(!categoria)
            return null

        return repo.save(categoria)
    }
}