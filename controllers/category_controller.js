import category from "../models/category_model";
import sub_category from "../models/sub-category_model";
import Product from "../models/product_model";
export const cheking = (req,res)=>{
    res.json("controller is Working");
}

export const list = async(req,res)=>{
    let find = await category.find({}).sort({category:-1});
    if(find){
        return res.status(200).json({
            message:"Success",
            data:find,
            status:true
        })
    }else{
        return res.status(500).json({
            message:"Category does not exist.",
            status:false
        })
    }
}

export const AddCategory = async(req,res)=>{
    let Create = await category.create({category:req.body.category,num:req.body.num});
    if(Create){
       return res.status(200).json({
           message:"Success",
           data:Create,
           status: true
       })
    }else{
        return res.status(500).json({
            message:"Somthing went wrong.",
            status: false
        })
    }
  }

export const categoryfind = async(req,res)=>{
       let find = await category.find({num:{$gt:req.body.gt,$lt:req.body.lt}})
       if(find){
        return res.status(200).json({
            message:"Success",
            data:find,
            status:true
        })
    }else{
        return res.status(500).json({
            message:"Category does not exist.",
            status:false
        })
    }
}  

export const removeCategory = async(req,res)=>{
    let Remove_Category = await category.findOneAndDelete({"category":req.body.category});
    if(Remove_Category){
        let Remove_Sub_category = await sub_category.deleteMany({"categoryId":Remove_Category._id});
        let Remove_Products = await Product.deleteMany({"categoryId":Remove_Category._id});
        return res.status(200).json({
            message:"Success",
            data:{Remove_Category,Remove_Sub_category,Remove_Products},
            status:true
        })
    }else{
        return res.status(500).json({
            message:"Something went Wrong.",
            status:false
        })
    }
}


export const editData = async(req,res)=>{
        let update = await category.findOneAndUpdate({"category":req.body.Category},{"category":req.body.category},{new:true});
         if(update){
             return res.status(200).json({
                 message:"Success",
                 data:update,
                 status:true
             })
         }else{
             return res.status(500).json({
                 message:"Something went Wrong.",
                 status:false
             })
         } 
    } 
    