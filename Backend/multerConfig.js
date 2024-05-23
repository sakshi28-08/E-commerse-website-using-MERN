const multer=require('multer')
const path=require('path')
const storage=multer.diskStorage({
    destination:"./uploads",
    filename:function(req,file,cb){
        cb(null,file.filename+"-"+ Date.now()+path.extname(file.originalname))
    }
})
module.exports=multer({storage:storage})