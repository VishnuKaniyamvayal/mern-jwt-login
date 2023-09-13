import mongoose from "mongoose";
import { Jwt } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userSchema = mongoose.Schema({
    firstName : {
        type : string,
        required : true,
    },
    lastName : {
        type : string,
        required : true,
    },
    email : {
        type : string,
        required : true,
    },
    passwords : {
        type : string,
        required : true,
    },
})

userSchema.methods.generateAuthToken = () =>{
    const token = Jwt.sign( {_id:this._id} , process.env.P_KEY , {expiresIn: "7d"});
    return token;
}