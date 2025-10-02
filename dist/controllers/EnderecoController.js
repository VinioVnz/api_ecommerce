"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnderecoController = void 0;
const EnderecoService_1 = require("../services/EnderecoService");
const notFound = 'Endereco não encontrado';
const serverError = 'Erro de servidor';
exports.EnderecoController = {
    async listar(req, res) {
        try {
            const enderecos = await EnderecoService_1.EnderecoService.getAll();
            res.status(200).json(enderecos);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    async buscar(req, res) {
        const id = Number(req.params.id);
        try {
            const endereco = await EnderecoService_1.EnderecoService.getOne(id);
            if (!endereco)
                res.status(404).json(notFound);
            res.status(200).json(endereco);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    },
    async criar(req, res) {
        try {
            const endereco = await EnderecoService_1.EnderecoService.create(req.body);
            res.status(201).json(endereco);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    },
    async deletar(req, res) {
        try {
            const id = Number(req.params.id);
            const deletado = await EnderecoService_1.EnderecoService.delete(id);
            if (!deletado)
                res.status(404).json(notFound);
            res.status(200).json({ message: 'deletado com sucesso' });
        }
        catch (error) {
            console.log(error);
            res.status(500).json(serverError);
        }
    },
    async atualizar(req, res) {
        try {
            const idEndereco = Number(req.params.id);
            const data = req.body;
            const endereco = EnderecoService_1.EnderecoService.update(idEndereco, data);
            if (!endereco) {
                res.status(404).json({ error: notFound });
            }
            res.status(200).json('Alterado com sucesso!');
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: serverError });
        }
    }
};
