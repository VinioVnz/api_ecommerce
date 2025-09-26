"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const ClienteService_1 = require("../services/ClienteService");
const notFound = 'Cliente não encontrado';
const serverError = 'Erro de servidor';
exports.ClienteController = {
    async listar(req, res) {
        try {
            const clientes = await ClienteService_1.ClienteService.getAll();
            res.status(200).json(clientes);
        }
        catch (e) {
            console.log('Erro:', e);
            res.status(500).json({ erro: "Erro ao listar clientes" });
        }
    },
    async buscar(req, res) {
        try {
            const cliente = await ClienteService_1.ClienteService.getOne(Number(req.params.id));
            if (!cliente) {
                res.status(404).json({ error: notFound });
            }
            res.status(200).json(cliente);
        }
        catch (e) {
            console.log('Erro:', e);
            res.status(500).json({ error: serverError });
        }
    },
    async criar(req, res) {
        try {
            const data = req.body;
            const cliente = await ClienteService_1.ClienteService.create(data);
            res.status(201).json(cliente);
        }
        catch (e) {
            console.log('Erro: ', e);
            res.status(500).json({ erro: serverError });
        }
    },
    async deletar(req, res) {
        try {
            const idCliente = Number(req.params.id);
            const deletado = await ClienteService_1.ClienteService.delete(idCliente);
            if (!deletado) {
                res.status(404).json({ error: notFound });
            }
            res.status(200).json({ message: 'Cliente deletado' });
        }
        catch (e) {
            console.log('Erro:', e);
            res.status(500).json({ error: serverError });
        }
    },
    async atualizar(req, res) {
        try {
            const idCliente = Number(req.params.id);
            const data = req.body;
            const cliente = ClienteService_1.ClienteService.update(data, idCliente);
            if (!cliente) {
                res.status(404).json({ error: notFound });
            }
            res.status(200).json('Alterado com sucesso!');
        }
        catch (e) {
            console.log(e);
            res.status(500).json({ error: serverError });
        }
    },
};
