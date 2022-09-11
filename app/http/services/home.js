const productModel=require('../../models/product')
const fs=require("fs");
const path=require('path')
const fileupload=require('express-fileupload');
const {ObjectID, default: mongoose}=require("mongoose")
class HomeService{
 async ReadProduct(selected){
    try{
       const result= await productModel.paginate({}, { page: selected.page, limit: selected.limit });
       if(result){
        return{
            status:200,
            massage:[result.docs,result.limit,result.offset,result.page,result.pages,result.total]
        }
       }else{
        return{
            status:400,
            massage:"error"
        }
       }
      
    }catch(err){
        return{
            status:403,
            massage:"مشکلی بوجود امده"
        }
    }
  }
 async DeleteProduct(selected){
   const find=await productModel.findOne({_id:mongoose.Types.ObjectId(selected)})
   if(find){
    find.remove();
    const way=path.join(__dirname,"../../../");
    const exactPath=way+'public/'+find.image
    fs.unlinkSync(exactPath)
        return{
        status:200,
        massage:"done"
    }
   }else{
    return{
        status:400,
        massage:"چنین دوره ای وجود ندارد"
    }
   }
 } 
 }
 module.exports=HomeService