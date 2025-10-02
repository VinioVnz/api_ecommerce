import { Router } from "express";
import { PedidoController } from "../controllers/PedidoController";

const routes = Router()

routes.get('/', PedidoController.listar)
routes.get('/:id', PedidoController.buscar)
routes.post('/', PedidoController.criar)
routes.delete('/:id', PedidoController.deletar)
routes.put('/:id', PedidoController.atualizar)

export default routes;
