import sequelize from "../config/database";
import Libro from "./Libro";
import Usuario from "./Usuario";
import Prestamos from "./Prestamos";

// Definir relaciones entre modelos
Prestamos.belongsTo(Libro, {
  foreignKey: "libro_id",
  as: "libro",
  onDelete: "RESTRICT"
})

Prestamos.belongsTo(Usuario, {
  foreignKey: "usuario_id",
  as: "usuario",
  onDelete: "RESTRICT"
})

Libro.hasMany(Prestamos, {
  foreignKey: "libro_id",
  as: "prestamos",
  onDelete: "RESTRICT"
})

Usuario.hasMany(Prestamos, {
  foreignKey: "usuario_id",
  as: "prestamos",
  onDelete: "RESTRICT"
})

export { sequelize, Libro, Usuario, Prestamos };