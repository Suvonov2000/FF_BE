import { Request,Response } from "express";
import { userSchema } from "../../schemas/user";
import { comparePassword, hashPassword } from "../../utils/password";
import { generateToken } from "../../utils/token";

export  const sign_up = async (req: Request, res:Response) =>{
    try {
        const {name,email,password} = req.body;

        const user = new userSchema ({
            name,
            email,
            password: await hashPassword(password)
        })

        const savedUser = await user.save();

        res.json({success:true, user: savedUser, token:await generateToken(savedUser)})


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

        const isPasswordMatched = await comparePassword(password,user?.password)

        if(!comparePassword(password,user?.password)){
            return res.status(401).json({success:false, message:"Incorrect password"})
        }

        res.json({success:true, user,token:generateToken(user)})
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:"Internal server error"})
        
    }
}