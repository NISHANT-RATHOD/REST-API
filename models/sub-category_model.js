import mongoose from "mongoose"

const {Schema} = mongoose;

const schema = new Schema({
    sub_category:{
        type:String
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    }
})

const sub_category = mongoose.model("Sub-category",schema);
export default sub_category;