import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import {authRouter} from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/auth",authRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is started on port ${process.env.PORT || 3000}`); 
})