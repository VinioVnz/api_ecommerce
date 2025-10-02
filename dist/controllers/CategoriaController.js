"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaController = void 0;
const CategoriaService_1 = require("../services/CategoriaService");
const serverError = 'Erro de servidor';
const notFound = 'Categoria não encontrada';
exports.CategoriaController = {
    async listar(req, res) {
        try {
            const categoria = await CategoriaService_1.CategoriaService.getAll();
            res.status(200).json(categoria);
        }
        catch (error) {
            console.log('Erro: ', error);
            res.status(500).json(serverError);
        }
    },
    async buscar(req, res) {
        try {
            const id = Number(req.params.id);
            const categoria = await CategoriaService_1.CategoriaService.getOne(id);
            if (!categoria)
                res.status(404).json(notFound);
            res.status(200).json(categoria);
        }
        catch (error) {
            console.log('Erro: ', error);
            res.status(500).json(serverError);
        }
    },
    async criar(req, res) {
        try {
            const data = req.body;
            const categoria = await CategoriaService_1.CategoriaService.create(data);
            res.status(201).json(categoria);
        }
        catch (error) {
            console.log('Erro: ', error);
            res.status(500).json(serverError);
        }
    },
    async deletar(req, res) {
        try {
            const id = Number(req.params.id);
            const deletado = await CategoriaService_1.CategoriaService.delete(id);
            if (!deletado)
                res.status(404).json(notFound);
            res.status(200).json('Categoria deletada com sucesso!');
        }
        catch (error) {
            console.log('Erro: ', error);
            res.status(500).json(serverError);
        }
    },
    async atualizar(req, res) {
        try {
            const data = req.body;
            const id = Number(req.params.id);
            const categoria = await CategoriaService_1.CategoriaService.update(id, data);
            if (!categoria)
                res.status(404).json(notFound);
            res.status(200).json(categoria);
        }
        catch (error) {
            console.log('Erro: ', error);
            res.status(500).json(serverError);
        }
    }
};
