import { Router } from 'express'; 
import {  findAllUser } from './controller/user.js';
const router = Router();




router.get("/", findAllUser) 


export default router