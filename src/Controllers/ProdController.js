import { Prod } from "../models/ProductsSchema.js";

const addProd = async (req,res)=>{
    console.log(req.body);
    try {
        const addProd=await Prod.create(req.body)
        res.status(200).json(addProd)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getProd = async(req,res)=>{
    try {
        const prod = await Prod.find()
        res.status(200).json(prod) 
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteProd = async (req,res)=>{
    try {
        let prodid = req.body.prodid
        const deleteProd = await Prod.findByIdAndDelete(prodid)
        res.status(200).json(deleteProd)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateProd = async(req,res)=>{
    try {
        let updateProd =await Prod.findByIdAndUpdate({_id: req.body.prodid},{prodPrice:req.body.prodPrice},{new:true})
        res.status(200).json(updateProd)
    } catch (error) {
        res.status(500).json(error)
    }
}

export {addProd,getProd,deleteProd,updateProd}