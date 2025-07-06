import { Router } from "express";
import { libroController } from "../controllers/LibroController.js";

const router = Router();
router.get("/", libroController.getAllLibros);
router.get("/:id", libroController.getLibroById);
router.post("/", libroController.createLibro);
router.get("/genre/:genre", libroController.getLibroByGenre);
router.put("/:id", libroController.updateLibro);
router.delete("/:id", libroController.deleteLibro);

export default router;