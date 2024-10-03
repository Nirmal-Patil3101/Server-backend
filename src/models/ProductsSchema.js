import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
    prodName:{
        type:String,
        required:[true,"Enter the Product Name"],
        unique:true
    },
    prodType:{
        type:String,
        required:[true,"Product Type "]
    },
    prodCategory:{
        type:Number,
        required:[true,"Product Category"]
    },
    prodPrice:{
        type:Number,
        required:[true,"Product Price"]
    },
    prodImge:{
        type:String,
        required:[true,"Product Img Url"]
    },
    prodDescription:{
        type:String,
        required:[true,"Product Description"]
    }
})

export const Prod =mongoose.model("Prod",productsSchema)
