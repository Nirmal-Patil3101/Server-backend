import express from 'express';
import { addUser, deleteUser, getAllUsers, updateUser } from '../Controllers/UserController.js';
import { addProd, getProd,deleteProd, updateProd } from '../Controllers/ProdController.js';
import { addOrder, deleteOrder, getOrder, updateOrder } from '../Controllers/OrderController.js';


const router = express.Router()

router.post("/adduser",addUser)
router.get("/alluser",getAllUsers)
router.delete("/deleteuser",deleteUser)
router.put("/updateuser",updateUser)

//Products Router
router.post("/addprod",addProd)
router.get("/prod",getProd)
router.delete("/deleteprod",deleteProd)
router.put("/updateprod",updateProd)

//Order Router 
router.post("/addorder",addOrder)
router.get("/order",getOrder)
router.delete("/deleteorder",deleteOrder)
router.put("/updateorder",updateOrder)


export {router}