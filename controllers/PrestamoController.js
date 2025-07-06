import { PrestamoService } from "../services/PrestamoService.js";

export const PrestamoController = {
  getAllPrestamos: async (req, res) => {
    try {
      const prestamos = await PrestamoService.getAllPrestamos();
      if (!prestamos || prestamos.length === 0) {
        return res.status(404).json({ error: "No se encontraron préstamos." });
      }
      res.json(prestamos);
    } catch (error) {
      console.error("Error fetching prestamos:", error);
      res.status(500).json({ error: "Error fetching prestamos" });
    }
  },
  getPrestamoById: async (req, res) => {
    const { id } = req.params;
    try {
      const prestamo = await PrestamoService.getPrestamoById(id);
      if (!prestamo) {
        return res.status(404).json({ error: "Préstamo no encontrado." });
      }
      res.json(prestamo);
    } catch (error) {
      console.error("Error fetching prestamo by ID:", error);
      res.status(500).json({ error: "Error fetching prestamo by ID" });
    }
  },
  createPrestamo: async (req, res) => {
    try {
      const prestamoData = req.body;
      if (prestamoData.id) {
        return res.status(400).json({ error: "No se debe proporcionar un ID al crear un préstamo." });
      }
      const prestamo = await PrestamoService.createPrestamo(prestamoData);
      res.status(201).json(prestamo);
    } catch (error) {
      console.error("Error creating prestamo:", error);
      res.status(500).json({ error: "Error creating prestamo" });
    }
  },
  updatePrestamo: async (req, res) => {
    const { id } = req.params;
    try {
      const prestamoData = req.body;
      const prestamo = await PrestamoService.updatePrestamo(id, prestamoData);
      if (!prestamo) {
        return res.status(404).json({ error: "Préstamo no encontrado." });
      }
      res.status(201)
        .location(`/api/prestamos/${prestamo.id}`)
        .json(prestamo);
    } catch (error) {
      console.error("Error updating prestamo:", error);
      res.status(500).json({ error: "Error updating prestamo" });
    }
  },
  deletePrestamo: async (req, res) => {
    const { id } = req.params;
    try {
      const prestamo = await PrestamoService.deletePrestamo(id);
      if (!prestamo) {
        return res.status(404).json({ error: "Préstamo no encontrado." });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting prestamo:", error);
      res.status(500).json({ error: "Error deleting prestamo" });
    }
  }
}