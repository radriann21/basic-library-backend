import { Sequelize, DataTypes } from "sequelize";
import config from "../config/database";
import Libro from "./Libro";
import Usuario from "./Usuario";
import Prestamos from "./Prestamos";

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
db.Prestamos.belongsTo(Libro, {
  foreignKey: "libro_id",
  as: "libro",
  onDelete: "RESTRICT"
})

db.Prestamos.belongsTo(Usuario, {
  foreignKey: "usuario_id",
  as: "usuario",
  onDelete: "RESTRICT"
})

db.Libro.hasMany(Prestamos, {
  foreignKey: "libro_id",
  as: "prestamos",
  onDelete: "RESTRICT"
})

db.Usuario.hasMany(Prestamos, {
  foreignKey: "usuario_id",
  as: "prestamos",
  onDelete: "RESTRICT"
})

export default db;