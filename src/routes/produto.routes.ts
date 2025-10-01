import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const routes = Router()

routes.get('/', ProdutoController.listar)
routes.get('/:id', ProdutoController.buscar)
routes.post('/', ProdutoController.criar)
routes.delete('/:id', ProdutoController.deletar)
routes.put('/:id', ProdutoController.atualizar)

export default routes
