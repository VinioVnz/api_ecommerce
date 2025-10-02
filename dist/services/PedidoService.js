"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoService = void 0;
const data_source_1 = require("../database/data-source");
const Pedido_1 = require("../database/entities/Pedido");
const repo = data_source_1.AppDataSource.getRepository(Pedido_1.Pedido);
exports.PedidoService = {
    async getAll() {
        return await repo.find({ relations: ['cliente'] });
    },
    async getOne(id) {
        return await repo.findOne({ where: { id } });
    },
    async create(data) {
        const pedido = repo.create(data);
        await repo.save(pedido);
        return pedido;
    },
    async delete(id) {
        const deletado = await repo.findOne({ where: { id } });
        if (!deletado)
            return null;
        await repo.remove(deletado);
        return deletado;
    },
    async update(id, data) {
        const pedido = await repo.preload({
            id,
            ...data
        });
        if (!pedido) {
            return null;
        }
        return await repo.save(pedido);
    }
};
