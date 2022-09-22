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
    confirmemail: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
        defaultValue:false
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(11)
    }, 
    age:{
        type:DataTypes.INTEGER
    }
})