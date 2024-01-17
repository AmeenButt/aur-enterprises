exports.upload = async(req,res)=>{
    const path = req.file.path;
    if(!path){
        return res.json({
            status:false,
            message:'Could not upload image'
        })
    }
    return res.json({
        status:true,
        message:'Image uploaded',
        result:path
    })
}