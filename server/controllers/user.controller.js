import Joi from "joi";
import User from "../models/user.model";
import CustomErrorHandler from "../services/CustomErrorHandler";
import cloudinary from 'cloudinary';
import bcrypt from 'bcrypt';
import fs from 'fs/promises';
const userController={
    async register(req,res,next){
       const registerSchema=Joi.object({
        fullName:Joi.string().min(5).max(50).required(),
        email:Joi.string().trim().email().required(),
        password:Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)).required(),
        confirmPassword:Joi.ref('password')
       })
       const {error}=registerSchema.validate(req.body);
       if(error){
        return next(error);
       }
       const{fullName,email,password,confirmPassword}=req.body;
       try{
        const exist=await User.exists({email});
        if(exist){
            return next(CustomErrorHandler.alreadyExists("User with this email already exists. Please try again with different email"));
        }
       }catch(error){
        return next(error)
       }
       const hashedPassword=await bcrypt.hash(password,10);
       const user=await User.create({
        fullName,
        email,
        password:hashedPassword,
        avatar:{
            public_id:email,
            secure_url:'https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg'
        }
       })
       if(req.file){
        try{
            const result=await cloudinary.v2.uploader.upload(req.file.path,{
                folder:'FBS',
                width:250,
                height:250,
                gravity:'faces',
                crop:'fill'
            });
            if(result){
                user.avatar.public_id=result.public_id;
                user.avatar.secure_url=result.secure_url;
                //Remove file from server
                 fs.rm(`uploads/${req.file.filename}`)
            }

        }catch(error){
          return next(CustomErrorHandler.mediaNotUploaded());
        }
      }
       await user.save();
       user.password=undefined;
       res.status(200).json({
        success:"true",
        message:"User Registered Succesfully",
        user
       })
    }
}

export default userController;