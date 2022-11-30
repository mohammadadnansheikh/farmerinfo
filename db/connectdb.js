import mongoose from 'mongoose'

const connectDB =  (DB)=>{
    mongoose.connect(
        DB,
        async(err)=>{
            if(err) throw err;
            console.log("connected to db")
        }
    )
}

export default connectDB