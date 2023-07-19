import express from "express"
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

app.listen(3000, ()=>console.log("Server connected"));