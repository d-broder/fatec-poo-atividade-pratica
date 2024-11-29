import cors from "cors";
import express from "express";
import clienteRoutes from "./routes/cliente.js";

const app = express();
const PORT = process.env.PORT || 32831;

app.use(cors());
app.use(express.json());
app.use("/cliente", clienteRoutes);
app.use("/pet", clienteRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
