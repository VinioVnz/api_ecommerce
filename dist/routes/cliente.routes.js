"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClienteController_1 = require("../controllers/ClienteController");
const routes = (0, express_1.Router)();
routes.get('/', ClienteController_1.ClienteController.listar);
exports.default = routes;
