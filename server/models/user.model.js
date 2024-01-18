import { Schema, model } from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        maxLength:[50,"The length of name must be less than 50 characters"],
        minLength:[5,"Name length must be greater than 5"]
    },
    email:{
        type:String,
        required:[true,"Phone Number is required"],
        minLength:[10,"Phone Number length must be 10"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[8,"Password length must be at least 8 characters long"]
    },
    avatar:{
        public_id:{
            type:String
        },
        secure_url:{
            type:String
        }
    },
    role:{
        type:String,
        enum:["USER","ADMIN","FUTSAL"],
        default:"USER"
    }
},{timestamps:true})

const User=model("User",userSchema,'users');
export default User;