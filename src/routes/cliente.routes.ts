import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";

const routes = Router();

routes.get('/',ClienteController.listar);
routes.get('/:id',ClienteController.buscar);
routes.delete('/:id',ClienteController.deletar);
routes.post('/',ClienteController.criar);
routes.put('/:id',ClienteController.atualizar);

export default routes;