import { Router } from 'express'; 
import {  deleteUser, findAllUser, getUserById, signIn, signUp, updateUser } from './controller/user.js';
const router = Router();




router.get("/", findAllUser) 
router.post("/signUp", signUp) 
router.post("/signIn", signIn) 
router.get("/id/:id", getUserById) 
router.put("/id/:id",updateUser)
router.delete("/id/:id",deleteUser)


export default router