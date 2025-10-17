import {Schema,model} from "mongoose"

export const User = new Schema({
    name:{
        type:String,
        required: true
    },
    emal:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

export const userSchema = model("users",User)