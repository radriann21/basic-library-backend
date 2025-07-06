import { Router } from "express";
import { PrestamoController } from "../controllers/PrestamoController.js";

const router = Router();

router.get("/", PrestamoController.getAllPrestamos);
router.get("/:id", PrestamoController.getPrestamoById);
router.post("/", PrestamoController.createPrestamo);
router.put("/:id", PrestamoController.updatePrestamo);
router.delete("/:id", PrestamoController.deletePrestamo);

export default router;