import { Router } from "express";
import { CategoriaController } from "../controllers/CategoriaController";

const routes = Router()

routes.get('/', CategoriaController.listar)
routes.get('/:id', CategoriaController.buscar)
routes.post('/', CategoriaController.criar)
routes.delete('/:id', CategoriaController.deletar)
routes.put('/:id',CategoriaController.atualizar)

export default routes
