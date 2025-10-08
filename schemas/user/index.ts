import {Schema,model} from "mongoose"

export const userSchema = new Schema({
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

export const User = model("User",userSchema)