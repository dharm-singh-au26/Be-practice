import validator from "validator";
import { isEmpty } from "./isEmpty";

export const validateLogin = (data) =>{
    const error {

    }
    if (data.email === '') error.email='Enter Your Email'
    if(data.password==='') error.password='Enter Your Password'
    
    if(!validator.isEmail(data.email)) error.email = ' Email is Invalid'
    if(!validator.isLength(data.password,{min:8,max:16})) error.password = 'password is incorrect' 

    if(isEmpty(error)){
        return null
    }else{

        return error
    }
    

}  