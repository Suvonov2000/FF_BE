import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import {authRouter} from "./routes";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/auth",authRouter)

// mongoose.connect(process.env.MONGO_URL ||"" ).then (()=>{
//     console.log("Connect to MongoDB");
// }).catch((error)=>{
//     console.log(error);
    
// })

app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`Server is started on port ${process.env.PORT || 3000}`); 
})