"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const ProdutoService_1 = require("../services/ProdutoService");
const serverError = 'Erro de servidor';
const notFound = 'Produto não encontrado';
exports.ProdutoController = {
    async listar(req, res) {
        try {
            const produtos = await ProdutoService_1.ProdutoService.getAll();
            res.status(200).json(produtos);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    },
    async buscar(req, res) {
        try {
            const id = Number(req.params.id);
            const produto = await ProdutoService_1.ProdutoService.getOne(id);
            if (!produto)
                res.status(404).json(notFound);
            res.status(200).json(produto);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    },
    async criar(req, res) {
        try {
            const data = req.body;
            const produto = await ProdutoService_1.ProdutoService.create(data);
            res.status(201).json(produto);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    },
    async deletar(req, res) {
        try {
            const id = Number(req.params.id);
            const deletado = await ProdutoService_1.ProdutoService.delete(id);
            if (!deletado)
                res.status(404).json(notFound);
            res.status(200).json(deletado);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    },
    async atualizar(req, res) {
        try {
            const data = req.body;
            const id = Number(req.params.id);
            const produto = await ProdutoService_1.ProdutoService.update(id, data);
            if (!produto) {
                res.status(404).json(notFound);
                res.status(200).json(produto);
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    }
};
