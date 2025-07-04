import { DataTypes } from "sequelize";

export default (sequelize) => {
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
    paginas: {
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
  return Libro
}

