import { Router } from 'express'; 
import { addProduct, deleteProduct, getAllProd, updateProduct } from './controller/product.js';
let router = Router();

 
 
router.post('/addProduct',addProduct)
router.get('/',getAllProd)
router.put("/id/:id/user/:UserId",updateProduct)
router.delete("/id/:id",deleteProduct)




export default router