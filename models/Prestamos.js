import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Libro = sequelize.define("Libro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  libro_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_prestamo: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  fecha_devolucion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: "prestamos",
  timestamps: false,
  underscored: true,
})