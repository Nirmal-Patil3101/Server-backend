import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    orderDate:{
        type:Date,
        required:[true,"Order Date"]
    },
    orderTotal:{
        type:Number,
        required:[true,"Order Total"]
    },
    orderNoofItem:{
        type:Number,
        required:[true,"Order Item"]
    },
    orderUserId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true,"User Id"]
    },
    orderProdId:{
        type:mongoose.Types.ObjectId,
        ref:"Prod",
        required:[true,"Product Id"]
    },
    orderStatus:{
        type:String,
        required:[true,"Order Status"]
    }
})

export const Order = mongoose.model("Order",orderSchema)