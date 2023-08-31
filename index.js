import express from "express";
import https from "https";
import path from "path";
import fs from "fs";

import cors from 'cors'
const app = express();
import loginRoute from './routes/loginRoute.js'
import audioRoute from './routes/audioRoute.js'

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

app.use("/login", loginRoute);

app.use("/audio", audioRoute);

app.get("/", (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json("Response from the server");
})

// const sslServer = https.createServer({
//     key:"",
//     cert: ""
// }, app)


// sslServer.listen(80, ()=>console.log("secure server connected"));
app.listen(3000, ()=>{console.log("server connected")});