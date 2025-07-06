import express from "express";
import cors from "cors";

// rutas
import libroRoutes from "./routes/LibroRoutes.js";
import usuarioRoutes from "./routes/UsuarioRoutes.js";

const app = express()
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

app.use("/api/libros", libroRoutes);
app.use("/api/usuarios", usuarioRoutes);

export default app;
