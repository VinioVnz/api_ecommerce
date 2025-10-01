"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnderecoService = void 0;
const data_source_1 = require("../database/data-source");
const Cliente_1 = require("../database/entities/Cliente");
const Endereco_1 = require("../database/entities/Endereco");
const repo = data_source_1.AppDataSource.getRepository(Endereco_1.Endereco);
const clienteRepo = data_source_1.AppDataSource.getRepository(Cliente_1.Cliente);
exports.EnderecoService = {
    async getAll() {
        return repo.find({
            relations: ["cliente"]
        });
    },
    async getOne(id) {
        return repo.findOne({ where: { id } });
    },
    async create(data) {
        if (!data.cliente_id) {
            return null;
        }
        const cliente = await clienteRepo.findOneBy({ id: data.cliente_id });
        if (!cliente) {
            return null;
        }
        const endereco = repo.create({ ...data, cliente });
        await repo.save(endereco);
        return endereco;
    },
    async delete(id) {
        const endereco = await repo.findOne({ where: { id } });
        if (!endereco)
            return null;
        await repo.delete(endereco);
        return endereco;
    },
    async update(id, data) {
        const endereco = await repo.preload({
            id,
            ...data
        });
        if (!endereco) {
            return null;
        }
        return repo.save(endereco);
    }
};
