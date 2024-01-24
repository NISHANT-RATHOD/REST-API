import mongoose from "mongoose";

const {Schema} = mongoose;

const schema = new Schema({
    product_name:{
          type:String,
          required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    model_No:{
        type:String,
        required:true,
        unique:true
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    sub_categoryId:{
        type:Schema.Types.ObjectId,
        ref:"Sub-category",
        required:true
    }
})


const Product = mongoose.model("product",schema);
export default Product ;