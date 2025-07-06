import { UsuarioService } from "../services/UsuarioService.js";

export const usuarioController = {
  getAllUsuarios: async (req, res) => {
    try {
      const usuarios = await UsuarioService.getAllUsuarios();
      if (!usuarios || usuarios.length === 0) {
        return res.status(404).json({ message: "No se encontraron usuarios." });
      }
      res.status(200).json(usuarios);
    } catch (error) {
      console.error("Error al obtener los usuarios");
      res.status(500).json({ error: error.message });
    }
  },
  getUsuarioById: async (req, res) => {
    const { id } = req.params
    try {
      const usuario = await UsuarioService.getUsuarioById(id);
      if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado." });
      }
      res.status(200).json(usuario);
    } catch (error) {
      console.error("Error al obtener el usuario por ID");
      res.status(500).json({ error: error.message });
    }
  },
  createUsuario: async (req, res) => {
    const usuarioData = req.body;
    try {
      const nuevoUsuario = await UsuarioService.createUsuario(usuarioData);
      res.status(201)
        .location(`/api/usuarios/${nuevoUsuario.id}`)
        .json(nuevoUsuario);
    } catch (error) {
      console.error("Error al crear el usuario");
      res.status(500).json({ error: error.message });
    }
  },
  updateUsuario: async (req, res) => {
    const { id } = req.params;
    const usuarioData = req.body;

    try {
      const usuarioActualizado = await UsuarioService.updateUsuario(id, usuarioData);
      if (!usuarioActualizado) {
        return res.status(404).json({ message: "Usuario no encontrado." });
      }
      res.status(200).json(usuarioActualizado);
    } catch (error) {
      console.error("Error al actualizar el usuario");
      res.status(500).json({ error: error.message });
    }
  },
  deleteUsuario: async (req, res) => {
    const { id } = req.params;
    try {
      const usuarioEliminado = await UsuarioService.deleteUsuario(id);
      if (!usuarioEliminado) {
        return res.status(404).json({ message: "Usuario no encontrado." });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error al eliminar el usuario");
      res.status(500).json({ error: error.message });
    }
  }
}