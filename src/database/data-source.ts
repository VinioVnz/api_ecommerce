import { DataSource } from "typeorm";
import "reflect-metadata"
import { Cliente } from "./entities/Cliente";

import * as dotenv from "dotenv";
dotenv.config();
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'ecommerce_api',
    entities:[Cliente],
    logging: true,
    migrations: ['dist/database/migrations/*.js'],
    synchronize: false
})