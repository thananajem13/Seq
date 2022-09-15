import { sequelize } from '../connection.js'
import { Sequelize, DataTypes } from 'sequelize'
export const userModel = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(11)
    },
    confirmEmail: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})