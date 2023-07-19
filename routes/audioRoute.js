import express from "express";
const route = express.Router();

route.get("/", (req,res)=>{
    res.json("Audio files");
});

export default route;