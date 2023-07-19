import express from "express";
const route = express.Router();
import path from 'path';
import fs from 'fs';

route.get("/", (req,res)=>{

    const filenameWithfoldername = req.body.filename;
    res.sendFile(path.resolve('./audiofiles/' + filenameWithfoldername));      
});



export default route;