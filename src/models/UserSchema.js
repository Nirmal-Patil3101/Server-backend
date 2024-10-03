import mongoose, { Types } from "mongoose";


const userSchema = mongoose.Schema({
    uname:{
        type:String,
        required:[true,"Name is required"],
        // unique:true
    },
    umobno:{
        type:Number,
        required:[true,"Mobile no is required"],
    },
    uemail:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    gender:{
       type:String,
       enum:['Male','Female'],
       required:[true,"select gender"]
    },
    uaddress:{
        type:String,
        required:[true,"Enter the address"]
    }
})

export const User = mongoose.model("User",userSchema)

// {
//     "uname":"Nirmal",
//     "umobno": 1234567894,
//     "uemail":"patil@gmail.com",
//     "uaddress": "Jalgaon"
// }


//Products Schema

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

//Order Schema

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
        type:String,
        required:[true,"User Id"]
    },
    orderProdId:{
        type:String,
        required:[true,"Product Id"]
    },
    orderStatus:{
        type:String,
        required:[true,"Order Status"]
    }
})

export const Order = mongoose.model("Order",orderSchema)