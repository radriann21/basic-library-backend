import { libroService } from "../services/LibroService.js";

export const libroController = {
  getAllLibros: async (req, res) => {
    try {
      const libros = await libroService.getAllLibros();
      if (!libros || libros.length === 0) {
        return res.status(404).json({ message: "No se encontraron libros." });
      }
      res.status(200).json(libros);
    } catch (error) {
      console.error("Error al obtener los libros");
      res.status(500).json({ error: error.message });
    }
  },
  getLibroById: async (req, res) => {
    const { id } = req.params
    try {
      const libro = await libroService.getLibroById(id);
      if (!libro) {
        return res.status(404).json({ message: `Libro no encontrado.` });
      }
      res.status(200).json(libro);
    } catch (error) {
      console.error("Error al obtener el libro");
      res.status(404).json({ error: error.message });
    }
  },
  createLibro: async (req, res) => {
    try {
      const libroData = req.body
      const libro = await libroService.createLibro(libroData);
      res.status(201).json(libro);
    } catch (error) {
      console.error("Error al crear el libro");
      res.status(500).json({ error: error.message });
    }
  }
}