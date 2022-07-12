import express from 'express'
import bodyParser from 'body-parser'
import { config } from './config';
import { UserRouter } from './src/User/routes';

const app = express();
const PORT = process.env.PORT || 3000 ; 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// user routers
app.use('/user',UserRouter)

app.listen( config.PORT, () =>{
   console.log(`server started at port no : ${PORT}`)
})
