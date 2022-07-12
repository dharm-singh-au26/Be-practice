import express from 'express'
import { loginHandler } from './handler';

const Router  = express.Router();

Router.post('/login',(req,res) =>{
     const {email,password} = req.body
    return loginHandler({email,password})
}) 

export const UserRouter = Router;