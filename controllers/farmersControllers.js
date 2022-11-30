import FarmerModel from "../models/famerModels.js";


class FarmerControllers{
    static  getFarmerRecord =async (req, res)=>{
        try{
            const result = await FarmerModel.find()
            res.send(result)
         }catch(err){
          console.log(err);
         }
    }
    static getFarmer = (req, res)=>{
        res.send("Farmer")
    }
    static createFarmer = async (req, res)=>{
        // post methods for getting data
        console.log(req.body)
        try{
            const doc = FarmerModel(req.body);
            const result =  await doc.save();
            res.send(result)
            
        }catch(err){
            console.log(err);
        }
    }
}
export default FarmerControllers;