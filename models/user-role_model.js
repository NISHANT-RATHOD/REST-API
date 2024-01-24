import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
    user_role:{
        type:String
    }
})

const user_roles = mongoose.model("User-role",schema);
export default user_roles;