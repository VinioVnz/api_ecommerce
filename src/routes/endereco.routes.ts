import { Router } from "express";
import { EnderecoController } from "../controllers/EnderecoController";

const routes = Router()

routes.get('/',EnderecoController.listar)
routes.get('/:id',EnderecoController.buscar)
routes.post('/',EnderecoController.criar)
routes.delete('/:id',EnderecoController.deletar)
routes.put('/:id',EnderecoController.atualizar)

export default routes;