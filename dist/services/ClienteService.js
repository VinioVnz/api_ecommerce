"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const data_source_1 = require("../database/data-source");
const Cliente_1 = require("../database/entities/Cliente");
const repo = data_source_1.AppDataSource.getRepository(Cliente_1.Cliente);
exports.ClienteService = {
    async getAll() {
        return await repo.find({ select: ['id'] });
    },
    async getOne(id) {
        return await repo.findOneBy({ id });
    },
    async create(data) {
        const cliente = await repo.create(data);
        await repo.save(cliente);
        return cliente;
    },
    async update(data, id) {
        const cliente = await repo.findOneBy({ id });
        if (!cliente) {
            return null;
        }
        repo.merge(cliente, data);
        await repo.save(cliente);
        return cliente;
    },
    async delete(id) {
        const cliente = await repo.findOneBy({ id });
        if (!cliente) {
            return null;
        }
        await repo.remove(cliente);
        return cliente;
    }
};
