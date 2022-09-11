const productModel=require('../../models/product');
const path=require('path');
const fs = require('fs');
class AdminService{
 async addProduct(selected,body){  
    try{ 
        const exact=path.join(__dirname,"../../../");
    const pathUpload=exact+"public/"+selected.name;
   selected.mv(pathUpload, (err)=>{
        if(err){
         console.log("err");
        
        }
        console.log('upload');    
    })
if(pathUpload){
    await productModel.create({
        image:selected.name,
        category:body.category,
        price:body.price,
        offPrice:body.offPrice,
        model:body.model,
        description:body.description,
        feature:body.feature
    })
    return{
        status:200,
        massage:'done'
    }
}else{
    return{
    status:404,
    massage:'not'
}}
      }catch(err){
        return{
            status:400,
            massage:err
        }
      }

}

async UpdateProductByimage(selected,body){
    const result = await productModel.findOne({_id:selected})
    if(result){
       const UploadImage=await productModel.updateOne({_id:selected},{image:body.avatar.name});
       if(UploadImage){
        
        const exact=path.join(__dirname,"../../../");
    const pathDelete=exact+"public/"+result.image;
    const pathUpload=exact+"public/"+body.avatar.name;
    body.avatar.mv(pathUpload,(err)=>{
        if(err){
            console.log(err);
        }
    })
    fs.unlinkSync(pathDelete);

      return{
        status:200,
        massage:"upload succsesfull"
      }
       }else{
        return{
            status:400,
            massage:"upload not succsesfull"
        }
       }
    }else{
        return{
            status:400,
            massage:"product not found"
        }
    }
}
async updateBydata(selected,body){
    const result=await productModel.findByIdAndUpdate(selected,body);
    if(result){
        
        return{
            status:200,
            massage:result
        }
    }else{
        return{
            status:400,
            massage:"not updated"
        }
    }
}
async deleteProduct(selected){
  const result=await productModel.findByIdAndDelete(selected);

  if(result){
    const exact=path.join(__dirname,"../../../");
        const pathDelete=exact+"public/"+result.image;
     fs.unlinkSync(pathDelete)
    return{
        status:200,
        massage:"product deleted"
    }
  }else{
    return{
        status:404,
        massage:"got problem"
    }
  }
}
}
module.exports=AdminService