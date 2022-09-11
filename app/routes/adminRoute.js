const express=require('express');
const {addProduct}=require('../http/controllers/adminController');
const {updateProduct}=require('../http/controllers/adminController');
const {updateBydata,isAdmin}=require('../http/controllers/adminController');
const {deleteProduct}=require('../http/controllers/adminController');
const {adminMiddlware}=require('../http/middlwares/admin')
const adminRoute=express.Router();
const {uploadMidllware}=require('../http/middlwares/upload');
adminRoute.post("/isadmin/:id",adminMiddlware,isAdmin)
adminRoute.post('/addproduct/:id',uploadMidllware,addProduct);
adminRoute.put('/updateproductbyimage/:id',updateProduct);
adminRoute.put("/updatebydata/:id",updateBydata);
adminRoute.delete("/deleteproduct/:id",deleteProduct);
module.exports=adminRoute