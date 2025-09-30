import express from "express";
import 'reflect-metadata';
import ClienteRoutes from "../src/routes/cliente.routes";
import EnderecoRoutes from '../src/routes/endereco.routes'
require('dotenv').config();
import { AppDataSource } from "./database/data-source";




AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(express.json());
    app.use('/clientes',ClienteRoutes);
    app.use('/enderecos',EnderecoRoutes)
    app.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta: ', process.env.PORT);
})
}).catch((error) => {
    console.log('Banco de dados não conectado ', error)
})

