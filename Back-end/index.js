import express from "express";

const APP = express();

APP.use(express.json());

APP.listen(5000, ()=>{
    console.log("Server on port: 5000")
})
