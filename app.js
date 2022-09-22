import express from 'express';
import { dbConn } from './DB/connection.js'; 
import { productModel } from './DB/model/product.js';
import { userModel } from './DB/model/User.js';
import * as indexRouter from './modules/index.router.js'
const app = express();
const port = 5000
let baseUrl = '/api/v1'
app.use(express.json())
dbConn()
 userModel.hasMany(productModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE",
 })
 productModel.belongsTo(userModel)
 
app.use(`${baseUrl}/user`, indexRouter.userRouter)
app.use(`${baseUrl}/product` , indexRouter.productRouter)






app.listen(port, () => {
    console.log("Server is running..........");
})