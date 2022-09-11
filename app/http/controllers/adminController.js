const AdminService=require('../services/adminService');
const service=new AdminService
module.exports={
    isAdmin:async (req,res)=>{
     res.status(200).json("is admin")
    },
    addProduct:async (req,res,next)=>{
        console.log(req.body);
      const result=await service.addProduct(req.files.avatar,req.body)
      res.status(result.status).json(result.massage)
    },
    updateProduct:async (req,res,next)=>{
      const result=await service.UpdateProductByimage(req.params.id,req.files)
      res.status(result.status).json(result.massage)
    },
    updateBydata:async (req,res,next)=>{
      const result=await service.updateBydata(req.params.id,req.body);
      res.status(result.status).json(result.massage)
    },
    deleteProduct:async (req,res,next)=>{
      const result=await service.deleteProduct(req.params.id);
      res.status(result.status).json(result.massage)
    }
}