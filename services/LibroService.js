import db from "../models/index.js";
const { Libro } = db;

export const libroService = {
  getAllLibros: async () => {
    try {
      const libros = await Libro.findAll()
      if (!libros || libros.length === 0) {
        throw new Error("No se encontraron libros en la base de datos.")
      }
      return libros
    } catch (error) {
      console.error("Error fetching libros:", error);
      throw error;
    }
  },
  getLibroById: async (id) => {
    try {
      const libro = await Libro.findByPk(id)
      if (!libro) {
        throw new Error(`Libro con ID ${id} no encontrado.`);
      }
      return libro;
    } catch (error) {
      console.error("Error fetching libro by ID:", error);
      throw error;
    }
  },
  getLibroByGenre: async (genre) => {
    try {
      const libros = await Libro.findAll({
        where: {
          genero: genre
        }
      })
      if (!libros || libros.length === 0) {
        throw new Error(`No se encontraron libros del género ${genre}.`);
      }
      return libros;
    } catch (error) {
      console.error("Error fetching libro by genre:", error);
      throw error;
    }
  },
  createLibro: async (libroData) => {
    if (libroData.id) {
      throw new Error("Error al manejar el ID");
    }
    try {
      const libro = await Libro.create(libroData)
      return libro;
    } catch (error) {
      console.error("Error creating libro:", error);
      throw error;
    }
  },
  updateLibro: async (id, libroData) => {
    try {
      const libro = await Libro.findByPk(id)
      if (!libro) {
        throw new Error(`Libro con ID ${id} no encontrado.`);
      }
      await libro.update(libroData)
      return libro;
    } catch (error) {
      console.error("Error updating libro:", error);
      throw error;
    }
  },
  deleteLibro: async (id) => {
    try {
      const libro = await Libro.findByPk(id)
      if (!libro) {
        throw new Error(`Libro con ID ${id} no encontrado.`);
      }
      await libro.destroy()
    } catch (error) {
      console.error("Error deleting libro:", error);
      throw error;
    }
  }
}