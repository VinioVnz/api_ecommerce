import { Request, Response } from "express"
import { ClienteService } from "../services/ClienteService";

const notFound = 'Cliente não encontrado';
const serverError = 'Erro de servidor';
export const ClienteController = {
    async listar(req: Request, res: Response) {
        try {
            const clientes = await ClienteService.getAll();
            res.status(200).json(clientes);
        } catch (e) {
            console.log('Erro:', e);
            res.status(500).json({ erro: "Erro ao listar clientes" })
        }
    },

    async buscar(req: Request, res: Response) {
        try {
            const cliente = await ClienteService.getOne(Number(req.params.id))

            if (!cliente) {
                res.status(404).json({ error: notFound })
            }
            res.status(200).json(cliente);
        } catch (e) {
            console.log('Erro:', e);
            res.status(500).json({ error: serverError })
        }
    },

    async criar(req: Request, res: Response) {
        try {
            const data = req.body;
            const cliente = await ClienteService.create(data);
            res.status(201).json(cliente)

        } catch (e) {
            console.log('Erro: ', e)
            res.status(500).json({ erro: serverError })
        }
    },

    async deletar(req: Request, res: Response) {
        try {
            const idCliente = Number(req.params.id)

            const deletado = await ClienteService.delete(idCliente);

            if (!deletado) {
                res.status(404).json({ error: notFound });
            }
            res.status(200).json({ message: 'Cliente deletado' });
        } catch (e) {
            console.log('Erro:', e)
            res.status(500).json({ error: serverError })
        }
    },
    async atualizar(req: Request, res: Response) {
        try {
            const idCliente = Number(req.params.id);
            const data = req.body;
            const cliente = ClienteService.update(data, idCliente)

            if (!cliente) {
                res.status(404).json({ error: notFound })
            }
            res.status(200).json('Alterado com sucesso!')
        } catch (e) {
            console.log(e);
            res.status(500).json({error: serverError})
        }
    },
}