import { Request, Response } from "express"
import { ClienteService } from "../services/ClienteService";
import { EnderecoService } from "../services/EnderecoService";

const notFound = 'Cliente não encontrado';
const serverError = 'Erro de servidor';

export const EnderecoController = {
    async listar(req: Request, res: Response) {
        try {
            const enderecos = await EnderecoService.getAll()
            res.status(200).json(enderecos)
        } catch (error) {
             console.log(error);
            res.status(500).json(error)
        }
    },

    async buscar(req: Request, res: Response) {
        const id = Number(req.params.id);
        try {
            const endereco = await EnderecoService.getOne(id)
            if (!endereco)
                res.status(404).json(notFound)

            res.status(200).json(endereco)
        } catch (error) {
             console.log(error);
            res.status(500).json(serverError)
        }
    },

    async criar(req: Request, res: Response) {
        try {
            const endereco = await EnderecoService.create(req.body)
            res.status(201).json(endereco)
        } catch (error) {
             console.log(error);
            res.status(500).json(serverError)
        }
    },

    async deletar(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const deletado = await EnderecoService.delete(id)

            if (!deletado)
                res.status(404).json(notFound)
            res.status(200).json({ message: 'deletado com sucesso' })
        } catch (error) {
             console.log(error);
            res.status(500).json(serverError)
        }
    },

    async atualizar(req: Request, res: Response) {
        try {
            const idEndereco = Number(req.params.id);
            const data = req.body;
            const endereco = EnderecoService.update(idEndereco,data)

            if (!endereco) {
                res.status(404).json({ error: notFound })
            }
            res.status(200).json('Alterado com sucesso!')
        } catch (error) {
            console.log(error);
            res.status(500).json({error: serverError})
        }
    }

}