import { Schema, model } from "mongoose";

const tokenSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        maxLength:[50,"Name Length must be less than 50 characters"],
        minLength:[5,"Name length must be greater than 5 characters"]
    },
    token:{
        type:String,
        required:[true,"Token is required"]
    }
})
const Token=model("Token",tokenSchema,"tokens");
export default Token;
