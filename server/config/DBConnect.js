import mongoose from "mongoose";
import {} from 'dotenv/config';
import { MONGODB_URL } from ".";

const connectToDB=async()=>{
    try{
        const {connection}=await mongoose.connect(MONGODB_URL);
        if(connection){
            console.log(`Connected to DB:${connection.host}`)
        }
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export default connectToDB;