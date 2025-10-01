"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const data_source_1 = require("../database/data-source");
const Cliente_1 = require("../database/entities/Cliente");
const bcript = require('bcrypt');
const saltRounds = 10;
const repo = data_source_1.AppDataSource.getRepository(Cliente_1.Cliente);
exports.ClienteService = {
    async getAll() {
        return repo.find({
            select: ['id', 'nome', 'email', 'cpf', 'telefone'],
            relations: ['enderecos']
        });
    },
    async getOne(id) {
        return repo.findOne({
            where: { id },
            select: ['id', 'nome', 'email', 'cpf', 'telefone'],
            relations: ['enderecos']
        });
    },
    async create(data) {
        data.senha = await bcript.hash(data.senha, saltRounds);
        const cliente = repo.create(data);
        await repo.save(cliente);
        return {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            telefone: cliente.telefone
        };
    },
    async update(data, id) {
        const cliente = await repo.findOneBy({ id });
        if (!cliente) {
            return null;
        }
        repo.merge(cliente, data);
        await repo.save(cliente);
        return {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            telefone: cliente.telefone
        };
    },
    async delete(id) {
        const cliente = await repo.findOneBy({ id });
        if (!cliente) {
            return null;
        }
        await repo.remove(cliente);
        return {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            telefone: cliente.telefone
        };
    }
};
