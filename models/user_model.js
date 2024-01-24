import mongoose from "mongoose";

const { Schema } = mongoose

const schema = new Schema({
    name: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true,
        match: /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    city: {
        type: String,
        required:true
    },
    contact: {
        type: Number,
        required:true
    },
    user_roleId: {
        type: Schema.Types.ObjectId,
        ref: "User-role",
        required:true
    }
});

const User = mongoose.model("User", schema);
export default User;
