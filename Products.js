import express from "express";


const prodapp = express();

prodapp.listen(5000,()=>{
    console.log("Server Started Prod......")
})