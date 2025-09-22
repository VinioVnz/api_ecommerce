import express from "express";
import 'reflect-metadata';
import ClienteRoutes from "../src/routes/cliente.routes";
require('dotenv').config();
const app = express();
app.use(express.json());

app.use('/clientes',ClienteRoutes);

app.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta: ', process.env.PORT);
})
