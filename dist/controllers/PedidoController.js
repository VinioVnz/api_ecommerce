"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoController = void 0;
const PedidoService_1 = require("../services/PedidoService");
const notFound = 'Pedido não encontrado';
const serverError = 'Erro de servidor';
exports.PedidoController = {
    async listar(req, res) {
        try {
            const pedidos = await PedidoService_1.PedidoService.getAll();
            res.status(200).json(pedidos);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    },
    async buscar(req, res) {
        try {
            const id = Number(req.params.id);
            const pedido = await PedidoService_1.PedidoService.getOne(id);
            if (!pedido)
                res.status(404).json(pedido);
            res.status(200).json(pedido);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    },
    async criar(req, res) {
        try {
            const data = req.body;
            const pedido = await PedidoService_1.PedidoService.create(data);
            res.status(200).json(pedido);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    },
    async deletar(req, res) {
        try {
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    },
    async atualizar(req, res) {
        try {
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    }
};
