import { Response, Request } from "express"
import { CategoriaService } from "../services/CategoriaService"

const serverError = 'Erro de servidor'
const notFound = 'Categoria não encontrada'
export const CategoriaController = {
    async listar(req: Request, res: Response) {
        try {
            const categoria = await CategoriaService.getAll()
            res.status(200).json(categoria);
        } catch (error) {
            console.log('Erro: ', error)
            res.status(500).json(serverError)
        }
    },
    async buscar(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const categoria = await CategoriaService.getOne(id)
            if (!categoria)
                res.status(404).json(notFound)

            res.status(200).json(categoria)

        } catch (error) {
            console.log('Erro: ', error)
            res.status(500).json(serverError)
        }
    },
    async criar(req: Request, res: Response) {
        try {

            const data = req.body
            const categoria = await CategoriaService.create(data)
            res.status(201).json(categoria)

        } catch (error) {
            console.log('Erro: ', error)
            res.status(500).json(serverError)
        }
    },
    async deletar(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const deletado = await CategoriaService.delete(id)
            if (!deletado)
                res.status(404).json(notFound)
            res.status(200).json('Categoria deletada com sucesso!')
        } catch (error) {
            console.log('Erro: ', error)
            res.status(500).json(serverError)
        }
    },
    async atualizar(req: Request, res: Response) {
        try {
            const data = req.body
            const id = Number(req.params.id)
            const categoria = await CategoriaService.update(id, data)
            if (!categoria)
                res.status(404).json(notFound)
            res.status(200).json(categoria)
        } catch (error) {
            console.log('Erro: ', error)
            res.status(500).json(serverError)
        }
    }
}