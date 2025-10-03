import { AppDataSource } from "../database/data-source";
import { Cliente } from "../database/entities/Cliente";
import { ItemPedido } from "../database/entities/ItemPedido";
import { Pedido } from "../database/entities/Pedido";
import { Produto } from "../database/entities/Produto";
const repo = AppDataSource.getRepository(Pedido)
const clienteRepo = AppDataSource.getRepository(Cliente)
const produtoRepo = AppDataSource.getRepository(Produto)
const itemRepo = AppDataSource.getRepository(ItemPedido)
export const PedidoService = {
    async getAll(): Promise<Pedido[]> {
        return await repo.find({ relations: ['cliente', 'itens', 'itens.produto'] })
    },
    async getOne(id: number): Promise<Pedido | null> {
        return await repo.findOne({
            where: { id },
            relations: ["cliente", "itens", "itens.produto"]
        })
    },
    async create(data: Partial<Pedido>): Promise<Pedido> {
        const cliente = await clienteRepo.findOneBy({ id: data.cliente?.id })
        if (!cliente) throw new Error("Cliente não encontrado")

        const pedido = repo.create({
            cliente,
            data_pedido: data.data_pedido,
            status: data.status,
        })
        let total = 0;
        const itens: ItemPedido[] = []

        for (const item of data.itens!) {
            const produto = await produtoRepo.findOneBy({ id: item.produto.id })
            if (!produto) throw new Error(`Produto ${item.produto.nome} não encontrado`)
            if (produto.estoque < item.quantidade) {
                throw new Error(`Estoque insuficiente para ${produto.nome}`);
            }
            const preco = produto.preco
            const subtotal = preco * item.quantidade
            total += subtotal;

            const itemPedido = itemRepo.create({
                quantidade: item.quantidade,
                preco_uni: preco,
                produto
            });
            console.log('aq passou')
            itens.push(itemPedido)

            produto.estoque -= item.quantidade;
            await produtoRepo.update(produto.id, { estoque: produto.estoque });
        }
        pedido.total = total;
        pedido.itens = itens;

        return await repo.save(pedido)
    },
    async delete(id: number): Promise<Pedido | null> {
        const deletado = await repo.findOne({ where: { id } })
        if (!deletado)
            return null
        await repo.remove(deletado)
        return deletado
    },
    async update(id: number, data: Partial<Pedido>): Promise<Pedido | null> {
        const pedido = await repo.preload({
            id,
            ...data
        })
        if (!pedido) {
            return null
        }
        return await repo.save(pedido)
    }
}