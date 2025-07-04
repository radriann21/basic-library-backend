import { Router } from "express";
import { libroController } from "../controllers/LibroController.js";

const router = Router();
router.get("/", libroController.getAllLibros);
router.get("/:id", libroController.getLibroById);
router.post("/", libroController.createLibro);

export default router;