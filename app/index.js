const express= require('express');
const bodyParser= require('body-parser');
const app= express();
const session=require('express-session');
const cookieParser=require('cookie-parser');
const router= require('./routes');
const { default: mongoose } = require('mongoose');
const fileupload=require("express-fileupload");
const multer=require('multer');
const forms=multer();
const exactPath=path.join(__dirname,"../");
require("dotenv").config({path:exactPath+"/.env"})
module.exports=class Applications{
    constructor(){       
        this.setupConfig();
        this.mongoConnection();
        this.setupRoute();
        this.expressSetup();
    }

    expressSetup(){
        app.listen(3001,()=>{
            console.log("app is running on port 3000");
        })
    }
    setupConfig(){
      app.use(express.json())
      app.use(bodyParser.json());
      app.use(session({
        secret: process.env.SESSSION_KEY,
        resave: true,
        saveUninitialized: true,
      }))
      app.use(cookieParser(process.env.COCKEIE_KEY));
      app.use(fileupload({createParentPath: true,}))
      app.use(express.static('public'))
    }
    mongoConnection(){
   const connection=  mongoose.connect(process.env.MONGO_URL)
   if(connection){
    console.log("connected");
   }else{
    console.log('problem');
   }
    }
    setupRoute(){
     app.use(router)
    }
}