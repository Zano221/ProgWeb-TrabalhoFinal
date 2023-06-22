import sequelize from './db.js'
import { DataTypes } from 'sequelize'

export const Funcionario = sequelize.define('FUNCIONARIO', {
    ID_FUNC: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    NOME_FUNC: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    EMAIL_FUNC: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SENHA_FUNC: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
  })

export const Vitima = sequelize.define('VITIMA', {
    ID_VITI: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    NOME_VITI: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CIDADE_VITI: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
  })