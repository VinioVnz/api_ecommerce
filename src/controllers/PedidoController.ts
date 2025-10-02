import { Request, Response } from "express";
import { PedidoService } from "../services/PedidoService";

const notFound = 'Pedido não encontrado';
const serverError = 'Erro de servidor';

export const PedidoController = {
    async listar(req: Request, res: Response) {
        try {
            const pedidos = await PedidoService.getAll()
            res.status(200).json(pedidos)
        } catch (error) {
            console.log(error)
            res.status(500).json(serverError)
        }
    },
    async buscar(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const pedido = await PedidoService.getOne(id)
            if(!pedido)
                res.status(404).json(pedido)
            res.status(200).json(pedido)
        } catch (error) {
            console.log(error)
            res.status(500).json(serverError)
        }
    },
    async criar(req: Request, res: Response) {
        try {
            const data = req.body
            const pedido = await PedidoService.create(data)
            res.status(200).json(pedido)
        } catch (error) {
            console.log(error)
            res.status(500).json(serverError)
        }
    },
    async deletar(req: Request, res: Response) {
        try {

        } catch (error) {
            console.log(error)
            res.status(500).json(serverError)
        }
    },
    async atualizar(req: Request, res: Response) {
        try {

        } catch (error) {
            console.log(error)
            res.status(500).json(serverError)
        }
    }
}