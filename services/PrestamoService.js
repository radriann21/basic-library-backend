import db from "../models/index.js";
const { Prestamos } = db;

export const PrestamoService = {
  getAllPrestamos: async () => {
    try {
      const prestamos = await Prestamos.findAll({
        include: [
          {
            model: db.Libro,
            as: "libro",
            attributes: ["id", "titulo", "autor"]
          },
          {
            model: db.Usuario,
            as: "usuario",
            attributes: ["id", "nombre", "apellido"]
          }
        ]
      })
      if (!prestamos || prestamos.length === 0) {
        throw new Error("No se encontraron préstamos en la base de datos.");
      }
      return prestamos;
    } catch (error) {
      console.error("Error fetching prestamos:", error);
      throw error;
    }
  },
  getPrestamoById: async (id) => {
    try {
      const prestamo = await Prestamos.findByPk(id, {
        include: [
          {
            model: db.Libro,
            as: "libro",
            attributes: ["id", "titulo", "autor"]
          },
          {
            model: db.Usuario,
            as: "usuario",
            attributes: ["id", "nombre", "apellido"]
          }
        ]
      })
      if (!prestamo) {
        throw new Error(`Préstamo no encontrado.`);
      }
      return prestamo;
    } catch (error) {
      console.error("Error fetching prestamo by ID:", error);
      throw error;
    }
  },
  createPrestamo: async (prestamoData) => {
    if (prestamoData.id) {
      throw new Error("Error al manejar el ID");
    }
    try {
      const prestamo = await Prestamos.create(prestamoData);
      return prestamo;
    } catch (error) {
      console.error("Error creating prestamo:", error);
      throw error;
    }
  },
  updatePrestamo: async (id, prestamoData) => {
    try {
      const prestamo = await Prestamos.findByPk(id);
      if (!prestamo) {
        throw new Error(`Préstamo no encontrado.`);
      }
      await prestamo.update(prestamoData);
      return prestamo;
    } catch (error) {
      console.error("Error updating prestamo:", error);
      throw error;
    }
  },
  deletePrestamo: async (id) => {
    try {
      const prestamo = await Prestamos.findByPk(id);
      if (!prestamo) {
        throw new Error(`Préstamo no encontrado.`);
      }
      await prestamo.destroy();
      return prestamo;
    } catch (error) {
      console.error("Error deleting prestamo:", error);
      throw error;
    }
  }
}