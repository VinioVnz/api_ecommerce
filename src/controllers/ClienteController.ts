import { Request, Response } from "express"

export const ClienteController = {
    async listar(req: Request, res: Response){
        res.status(200).json({status: "sucesso"})
    },
    async buscar(req: Request, res: Response){
        res.status(200).json({status: "sucesso"})
    },
    async criar(req: Request, res: Response){
        res.status(200).json({status: "sucesso"})
    },
    async deletar(req: Request, res: Response){
        res.status(200).json({status: "sucesso"})
    },
    async atualizar(req: Request, res: Response){
        res.status(200).json({status: "sucesso"})
    },
}