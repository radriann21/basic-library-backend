import { Router } from "express";
import { usuarioController } from "../controllers/UsuarioController.js";

const router = Router();

router.get("/", usuarioController.getAllUsuarios)
router.get("/:id", usuarioController.getUsuarioById)
router.post("/", usuarioController.createUsuario)
router.put("/:id", usuarioController.updateUsuario)
router.delete("/:id", usuarioController.deleteUsuario)

export default router;