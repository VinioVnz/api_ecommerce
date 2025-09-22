"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const cliente_routes_1 = __importDefault(require("../src/routes/cliente.routes"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/clientes', cliente_routes_1.default);
app.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta: ', process.env.PORT);
});
