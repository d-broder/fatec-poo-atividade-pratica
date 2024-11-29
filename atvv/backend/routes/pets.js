import express from "express";
import { DataTypes, Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite",
});

const Pet = sequelize.define("Pet", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    raca: DataTypes.STRING,
    genero: DataTypes.STRING,
    cpfDono: DataTypes.STRING,
});

sequelize.sync();

router.get("/pets", async (req, res) => {
    const pets = await Pet.findAll();
    res.json(pets);
});

router.post("/pets", async (req, res) => {
    const novoPet = { id: uuidv4(), ...req.body };
    const pet = await Pet.create(novoPet);
    res.status(201).json(pet);
});

router.delete("/pets", async (req, res) => {
    const { id } = req.body;
    await Pet.destroy({ where: { id } });
    res.status(204).end();
});

router.put("/pets", async (req, res) => {
    const { id, ...updatedData } = req.body;
    await Pet.update(updatedData, { where: { id } });
    res.status(200).json(updatedData);
});

export default router;
