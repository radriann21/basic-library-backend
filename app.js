import express from "express";
import cors from "cors";

// rutas
import libroRoutes from "./routes/LibroRoutes.js";
import usuarioRoutes from "./routes/UsuarioRoutes.js";
import PrestamoRoutes from "./routes/PrestamoRoutes.js";

const app = express()
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

app.use("/api/libros", libroRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/prestamos", PrestamoRoutes);

export default app;
