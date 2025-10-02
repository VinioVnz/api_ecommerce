import express from "express";
import 'reflect-metadata';
import ClienteRoutes from "../src/routes/cliente.routes";
import EnderecoRoutes from '../src/routes/endereco.routes'
import CategoriaRoutes from '../src/routes/categoria.routes'
import ProdutoRoutes from '../src/routes/produto.routes'
import PedidoRoutes from '../src/routes/pedido.routes'
require('dotenv').config();
import { AppDataSource } from "./database/data-source";




AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(express.json());
    app.use('/clientes',ClienteRoutes);
    app.use('/enderecos',EnderecoRoutes);
    app.use('/categorias',CategoriaRoutes);
    app.use('/produtos',ProdutoRoutes);
    app.use('/pedidos',PedidoRoutes)

    app.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta: ', process.env.PORT);
})
}).catch((error) => {
    console.log('Banco de dados não conectado ', error)
})

