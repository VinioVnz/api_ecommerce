"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaService = void 0;
const data_source_1 = require("../database/data-source");
const Categoria_1 = require("../database/entities/Categoria");
const repo = data_source_1.AppDataSource.getRepository(Categoria_1.Categoria);
exports.CategoriaService = {
    async getAll() {
        return repo.find({ relations: ['produtos'] });
    },
    async getOne(id) {
        return repo.findOne({
            where: { id },
            relations: ['produtos']
        });
    },
    async create(data) {
        const categoria = repo.create(data);
        await repo.save(categoria);
        return categoria;
    },
    async delete(id) {
        const categoria = await repo.findOne({ where: { id } });
        if (!categoria)
            return null;
        await repo.remove(categoria);
        return categoria;
    },
    async update(id, data) {
        const categoria = await repo.preload({
            id,
            ...data
        });
        if (!categoria)
            return null;
        return repo.save(categoria);
    }
};
