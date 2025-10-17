import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

export const generateToken = (user:any)=>{
    return jwt.sign({id: user._id},String(process.env.JWT_SECRET),{
        expiresIn:"1d"
    })
}

export const verifyToken = (token: string)=>{
    return jwt.verify(token,string(process.env.JWT_SECRET))
}