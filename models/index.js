import { Sequelize, DataTypes } from "sequelize";
import config from "../config/database.js";
import Libro from "./Libro.js";
import Usuario from "./Usuario.js";
import Prestamos from "./Prestamos.js";

const env = process.env.NODE_ENV || "development"
const dbConfig = config[env]

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect || "postgres",
  }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.Libro = Libro(sequelize, DataTypes)
db.Usuario = Usuario(sequelize, DataTypes)
db.Prestamos = Prestamos(sequelize, DataTypes)


// Definir relaciones entre modelos
db.Prestamos.belongsTo(db.Libro, {
  foreignKey: "libro_id",
  as: "libro",
  onDelete: "RESTRICT"
})

db.Prestamos.belongsTo(db.Usuario, {
  foreignKey: "usuario_id",
  as: "usuario",
  onDelete: "RESTRICT"
})

db.Libro.hasMany(db.Prestamos, {
  foreignKey: "libro_id",
  as: "prestamos",
  onDelete: "RESTRICT"
})

db.Usuario.hasMany(db.Prestamos, {
  foreignKey: "usuario_id",
  as: "prestamos",
  onDelete: "RESTRICT"
})

export default db;