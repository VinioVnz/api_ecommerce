import { Request, Response } from "express"
import { ProdutoService } from "../services/ProdutoService"
const serverError = 'Erro de servidor'
const notFound = 'Produto não encontrado'

export const ProdutoController = {
    async listar(req: Request, res: Response){
       try {
        const produtos = await ProdutoService.getAll()
        res.status(200).json(produtos)
       } catch (error) {
            console.log(error)
            res.status(500).json(serverError)
       } 
    },
    async buscar(req: Request, res: Response){
       try {
        const id = Number(req.params.id)
        const produto = await ProdutoService.getOne(id)
        if(!produto)
            res.status(404).json(notFound)
        res.status(200).json(produto)
       } catch (error) {
            console.log(error)
            res.status(500).json(serverError)
       } 
    },
    async criar(req: Request, res: Response){
       try {
        const data = req.body
        const produto = await ProdutoService.create(data)
        res.status(201).json(produto)
       } catch (error) {
            console.log(error)
            res.status(500).json(serverError)
       } 
    },
    async deletar(req: Request, res: Response){
       try {
        const id = Number(req.params.id)
        const deletado = await ProdutoService.delete(id)

        if(!deletado)
            res.status(404).json(notFound)
        res.status(200).json('Produto deletado com sucesso')
       } catch (error) {
            console.log(error)
            res.status(500).json(serverError)
       } 
    },
    async atualizar(req: Request, res: Response){
       try {
        const data = req.body
        const id = Number(req.params.id)

        const produto = await ProdutoService.update(id,data)
        if(!produto)
            res.status(404).json(notFound)
        res.status(200).json(produto)
        
       } catch (error) {
            console.log(error)
            res.status(500).json(serverError)
       } 
    }
}