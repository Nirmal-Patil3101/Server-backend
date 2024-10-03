import express from 'express';
import mongoose from 'mongoose';

const connecToDb = async ()=>{
    try {
        const connectiondata = await mongoose.connect("mongodb://localhost:27017/demodb")
        console.log("Connection Successfull",connectiondata.connection.name);
    }catch (error){
        console.log(error);
    }
}

export {connecToDb}