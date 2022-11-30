import mongoose from "mongoose";


const farmerSchema = mongoose.Schema({
    firstname: {type : String, trim: true},
    middlename: {type : String, trim: true},
    lastname: {type : String, trim: true},
    cityorvillage : {type : String, trim : true},
    district : {type : String, trim : true},
    states : {type : String, trim : true},
    pincode : {type : Number, trim : true},
    age : {type : Number, trim :true},
    numberofcattle : {type: Number, trim : true},
    quantityofmilk : {type : Number, trim : true}
    
})

const FarmerModel = mongoose.model('farmers', farmerSchema);
export default FarmerModel;