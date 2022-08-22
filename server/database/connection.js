import Sequelize from "sequelize";
import ClicksDef from "./models/clicks.js";

// const sequelize = new Sequelize('sqlite://database.db')
const sequelize = new Sequelize(process.env.POSTGRES_URI);

ClicksDef(sequelize).sync();

export default sequelize;
