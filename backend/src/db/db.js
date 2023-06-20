import { Sequelize } from "sequelize";

let sequelize = new Sequelize('FUNDACAO', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

export default sequelize;