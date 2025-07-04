import express from "express";
import cors from "cors";

// rutas
import libroRoutes from "./routes/LibroRoutes.js";

const app = express()
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

app.use("/api/libros", libroRoutes);

export default app;
