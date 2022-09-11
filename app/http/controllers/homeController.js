
const HomeService=require('../services/home');

const path1=require("path");
const service=new HomeService

module.exports={
    readProduct:async (req,res)=>{
      const result=await service.ReadProduct(req.body)
      res.status(result.status).json(result.massage)
    },
    deleteProduct:async (req,res)=>{
        const id=req.params.id;
        const result=await service.DeleteProduct(id)
        res.status(result.status).json(result.massage)

    }


}