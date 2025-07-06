import express from "express";
import cors from "cors";
import { rateLimit } from "express-rate-limit";

// rutas
import libroRoutes from "./routes/LibroRoutes.js";
import usuarioRoutes from "./routes/UsuarioRoutes.js";
import PrestamoRoutes from "./routes/PrestamoRoutes.js";

// limitador de tasa
const Limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limitar a 100 solicitudes por IP por ventana de tiempo
  message: "Demasiadas solicitudes desde esta IP, por favor intente más tarde."
})

const app = express()
app.use(Limiter);
app.use(express.json());
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use("/api/libros", libroRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/prestamos", PrestamoRoutes);

export default app;
