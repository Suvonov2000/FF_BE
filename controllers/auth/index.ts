import { Request,Response } from "express";
import { userSchema } from "../../schemas/user";

export  const sign_up = async (req: Request, res:Response) =>{
    try {
        const {name,email,password} = req.body;

        const user = new userSchema ({
            name,
            email,
            password
        })

        const savedUser = await user.save();

        res.json({success:true, user: savedUser})


    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:"Internal server error"})
        
    }
}


export const sign_in = async(req:Request, res:Response) =>{
    try {
        const {email,password}=req.body;

        const user = await userSchema.findOne({email});

        if(!user){
            return res.status(404).json({success:false, message:"User not found"})
        }

        if(user?.password !== password){
            return res.status(401).json({success:false, message:"Incorrect password"})
        }
        
        res.json({success:true, user})
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:"Internal server error"})
        
    }
}