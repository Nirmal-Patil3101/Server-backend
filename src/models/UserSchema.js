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
