import db from "../models/index.js";
const { Usuario } = db;

export const UsuarioService = {
  getAllUsuarios: async () => {
    try {
      const usuarios = await Usuario.findAll()
      if (!usuarios || usuarios.length === 0) {
        throw new Error("No se encontraron usuarios en la base de datos.")
      }
      return usuarios
    } catch (error) {
      console.error("Error fetching usuarios:", error);
      throw error;
    }
  },
  getUsuarioById: async (id) => {
    try {
      const usuario = await Usuario.findByPk(id)
      if (!usuario) {
        throw new Error(`Usuario con no encontrado.`);
      }
      return usuario;
    } catch (error) {
      console.error("Error fetching usuario by ID:", error);
      throw error;
    }
  },
  createUsuario: async (usuarioData) => {
    if (usuarioData.id) {
      throw new Error("Error al manejar el ID");
    }
    try {
      const usuario = await Usuario.create(usuarioData)
      return usuario
    } catch (error) {
      console.error("Error creating usuario:", error);
      throw error;
    }
  },
  updateUsuario: async (id, usuarioData) => {
    try {
      const usuario = await Usuario.findByPk(id)
      if (!usuario) {
        throw new Error(`Usuario no encontrado.`);
      }
      await usuario.update(usuarioData)
      return usuario;
    } catch (error) {
      console.error("Error fetching usuario by ID:", error);
      throw error;
    }
  },
  deleteUsuario: async (id) => {
    try {
      const usuario = await Usuario.findByPk(id)
      if (!usuario) {
        throw new Error(`Usuario no encontrado.`);
      }
      await usuario.destroy()
      return usuario;
    } catch (error) {
      console.error("Error deleting usuario:", error);
      throw error;
    }
  }
}