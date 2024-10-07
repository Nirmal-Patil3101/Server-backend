import { Order } from "../models/OrderSchema.js";


const addOrder = async (req,res)=>{
    console.log(req.body);
    try {
        const addOrder =await Order.create(req.body)
        res.status(200).json(addOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getOrder = async(req,res)=>{
    try {
        const order = await Order.find()
        .populate('orderUserId',"uname umobno")
        .populate('orderItems.prodId',"prodName prodPrice")
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteOrder = async(req,res)=>{
    try {
        let orderid = req.body.orderid
        const deleteOrder=await Order.findByIdAndDelete(orderid)
        res.status(200).json(deleteOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateOrder = async(req,res)=>{
    try {
        let updateOrder=await Order.findByIdAndUpdate({_id: req.body.orderid},{orderStatus:req.body.orderStatus},{new:true})
        res.status(200).json(updateOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

export {addOrder,getOrder,deleteOrder,updateOrder}