import mongoose from "mongoose";

const {Schema} = mongoose;

const schema = new Schema({
     category:{
         type:String
     },
     num:{
         type:Number
     }  
})

const category = mongoose.model("Category",schema);
export default category;