import { AppDataSource } from "../database/data-source";
import { Pedido } from "../database/entities/Pedido";
const repo = AppDataSource.getRepository(Pedido)

export const PedidoService = {
    async getAll(): Promise<Pedido[]>{
        return await repo.find({relations: ['cliente']})
    },
    async getOne(id: number): Promise<Pedido | null>{
        return await repo.findOne({where: {id}})
    },
    async create(data: Partial<Pedido>): Promise<Pedido>{
        const pedido = repo.create(data)
        await repo.save(pedido)
        return pedido
    },
    async delete(id: number): Promise<Pedido | null>{
        const deletado = await repo.findOne({where: {id}})
        if(!deletado)
            return null
        await repo.remove(deletado)
        return deletado
    },
    async update(id: number, data: Partial<Pedido>): Promise<Pedido | null>{
        const pedido = await repo.preload({
            id,
            ...data
        })
        if(!pedido){
            return null
        }
        return await repo.save(pedido)
    }
}