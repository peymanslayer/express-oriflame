const mongoose= require('mongoose');
const crypto=require("crypto");
var mongoosePaginate = require('mongoose-paginate');
const productModel=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    offPrice:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    feature:{
        type:[String],
        required:true
    }
})
productModel.plugin(mongoosePaginate)
module.exports=mongoose.model('product',productModel);