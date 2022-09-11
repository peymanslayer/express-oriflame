const {authRoute}=require("./authRoute");
const homeRouter=require('./homeRoute');
const adminRoute=require('./adminRoute')
const express= require('express');
const router=express.Router();

router.use(authRoute,homeRouter,adminRoute);

module.exports=router