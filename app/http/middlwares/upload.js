module.exports={
    uploadMidllware:async (req,res,next)=>{
       if(req.files===null){
        res.status(400).json("فایلی وجود ندارد")
       }else{
        
        next()
       }
    }
}