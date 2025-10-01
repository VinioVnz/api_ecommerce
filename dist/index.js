"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const cliente_routes_1 = __importDefault(require("../src/routes/cliente.routes"));
const endereco_routes_1 = __importDefault(require("../src/routes/endereco.routes"));
require('dotenv').config();
const data_source_1 = require("./database/data-source");
data_source_1.AppDataSource.initialize().then(async () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use('/clientes', cliente_routes_1.default);
    app.use('/enderecos', endereco_routes_1.default);
    app.listen(process.env.PORT, () => {
        console.log('Servidor rodando na porta: ', process.env.PORT);
    });
}).catch((error) => {
    console.log('Banco de dados não conectado ', error);
});
