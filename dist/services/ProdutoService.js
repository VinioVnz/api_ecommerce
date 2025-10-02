"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const data_source_1 = require("../database/data-source");
const Produto_1 = require("../database/entities/Produto");
const repo = data_source_1.AppDataSource.getRepository(Produto_1.Produto);
exports.ProdutoService = {
    async getAll() {
        return await repo.find({ relations: ['categoria'] });
    },
    async getOne(id) {
        return await repo.findOne({ where: { id }, relations: ['categoria'] });
    },
    async create(data) {
        const produto = repo.create(data);
        return await repo.save(produto);
    },
    async delete(id) {
        const produto = await repo.findOne({ where: { id } });
        if (!produto)
            return null;
        await repo.remove(produto);
        return produto;
    },
    async update(id, data) {
        const produto = await repo.preload({
            id,
            ...data
        });
        if (!produto)
            return null;
        return repo.save(produto);
    },
};
