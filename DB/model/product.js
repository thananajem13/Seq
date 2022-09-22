
import { sequelize } from "../connection.js";
import { DataTypes } from 'sequelize'
export let productModel  = sequelize.define("Product", {

    name:{
        type:DataTypes.STRING(100) ,//255,
        allowNull:false

    },
    description:{
        type:DataTypes.STRING(100) ,//255,
        allowNull:false
    },
    price:{
        type:DataTypes.FLOAT,//255,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER ,//255,
        allowNull:false
    }

})