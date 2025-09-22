import { DataSource } from "typeorm";
import "reflect-metadata"
import { Cliente } from "./entities/Cliente";

import * as dotenv from "dotenv";
dotenv.config();
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities:[Cliente],
    migrations: ['dist/database/migrations/*.js'],
    synchronize: false
})