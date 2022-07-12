import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,       
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type: String,
        required : true,
    },
    confirmpassword : {
        type : String,
        required :true
    }
})

