import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Libro = sequelize.define("Libro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_publicacion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  cantidad_paginas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  disponible: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  }
}, {
  tableName: "libros",
  timestamps: false,
  underscored: true,
})

export default Libro;