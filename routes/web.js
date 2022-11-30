import express from 'express';
import FarmerControllers from '../controllers/farmersControllers.js';


const router = express.Router();
router.get('/createfarmer', FarmerControllers.getFarmer);
router.post('/createfarmer', FarmerControllers.createFarmer);
router.get('/getfarmerrcord', FarmerControllers.getFarmerRecord);
export default router;