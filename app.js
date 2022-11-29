import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
dotenv.config({path : './config.env'})
const port = process.env.PORT || 5000;


const app = express();

app.get('/',(req, res)=>{
    res.send("hi")
})

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'))
}

app.listen(port, ()=>{
    console.log("working")
})
