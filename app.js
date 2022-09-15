import express from 'express';
import { dbConn } from './DB/connection.js'; 
import * as indexRouter from './modules/index.router.js'
const app = express();
const port = 5000
app.use(express.json())
dbConn()
 
 
app.use("/api/v1/user", indexRouter.userRouter)
app.use("/api/v1/product", indexRouter.productRouter)






app.listen(port, () => {
    console.log("Server is running..........");
})