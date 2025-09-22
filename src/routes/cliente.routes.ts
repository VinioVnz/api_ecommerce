import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";

const routes = Router();

routes.get('/',ClienteController.listar);

export default routes;