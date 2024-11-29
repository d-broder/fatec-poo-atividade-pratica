import express from "express";
import { DataTypes, Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite",
});

const Cliente = sequelize.define("Cliente", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    nome: DataTypes.STRING,
    nomeSocial: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    telefone: DataTypes.STRING,
    dataCadastro: DataTypes.STRING,
});

sequelize.sync();

router.get("/clientes", async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
});

router.post("/clientes", async (req, res) => {
    const novoCliente = { id: uuidv4(), ...req.body };
    const cliente = await Cliente.create(novoCliente);
    res.status(201).json(cliente);
});

router.delete("/clientes", async (req, res) => {
    const { id } = req.body;
    await Cliente.destroy({ where: { id } });
    res.status(204).end();
});

router.put("/clientes", async (req, res) => {
    const { id, ...updatedData } = req.body;
    await Cliente.update(updatedData, { where: { id } });
    res.status(200).json(updatedData);
});

export default router;
