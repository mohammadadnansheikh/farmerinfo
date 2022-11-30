import express from 'express'


import connectDB from './db/connectdb.js'

import web from './routes/web.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config({path : './config.env'})
const port = process.env.PORT || 5000;
const DATABASE_URL =  process.env.DATABASE_URL
const app = express();
app.use(cors());

connectDB(DATABASE_URL)
app.use(express.json())


app.use('/', web)
//console.log("end")


if(process.env.NODE_ENV == 'production'){
   // app.use(express.static(path.join(__dirname, 'build')));
    app.use(express.static("frontend/build"))
}



app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
})
