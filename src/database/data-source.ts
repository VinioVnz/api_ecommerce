import { DataSource } from "typeorm";
import "reflect-metadata"
import { Cliente } from "./entities/Cliente";

import * as dotenv from "dotenv";
import { Endereco } from "./entities/Endereco";
import { Produto } from "./entities/Produto";
import { Categoria } from "./entities/Categoria";
import { Pedido } from "./entities/Pedido";
dotenv.config();
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'ecommerce_api',
    entities:[Cliente,Endereco,Produto,Categoria,Pedido],
    logging: true,
    migrations: ['dist/database/migrations/*.js'],
    synchronize: false
})