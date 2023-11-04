import express from "express";
const app = express();

import cors from 'cors'
import loginRoute from './routes/loginRoute.js'
import audioRoute from './routes/audioRoute.js'
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

app.use("/login", loginRoute);

app.use("/audio", audioRoute);

app.get("/", (req,res)=>{
    // console.log(req);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json("Response from the server");
})

app.listen(PORT, ()=>{console.log(`server connected : ${PORT}`)});