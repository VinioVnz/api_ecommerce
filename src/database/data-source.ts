import { DataSource } from "typeorm";
import { Cliente } from "./entities/Cliente";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities:[Cliente],
    migrations: ['dist/database/migrations/*.js'],
    synchronize: Boolean(process.env.DB_SYNC)
})