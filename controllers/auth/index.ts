import { Request,Response } from "express";

export  const sign_up = (req: Request, res:Response) =>{
    try {
        res.json({message:"Sign up"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
        
    }
}


export const sign_in = (req:Request, res:Response) =>{
    try {
        res.json({message:"Sign in"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
        
    }
}