
const {readProduct}=require('../http/controllers/homeController');
const {deleteProduct}=require('../http/controllers/homeController')
const express=require('express');
const multer=require('multer');
const bodyparser=require('body-parser');

const homeRouter=express.Router()


homeRouter.get('/readproduct',readProduct)
homeRouter.delete('/deleteproduct/:id',deleteProduct);
module.exports=homeRouter