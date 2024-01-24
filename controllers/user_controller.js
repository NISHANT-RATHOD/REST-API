import User from "../models/user_model"
import user_roles from "../models/user-role_model";

export const cheking = (req, res) => {
    res.json("controller is Working");
}


export const UserProfiles = async (req, res) => {
    let find = await User.find({}).populate("user_roleId");
    if (find) {
        return res.status(200).json({
            message: "Success",
            data: find,
            status: true
        })
    } else {
        return res.status(500).json({
            message: "User does not exist.",
            status: false
        })
    }
}

export const createUser = async (req, res) => {
    if (!req.body.name && !req.body.email && !req.body.city && !req.body.contact && !req.body.user_role) {
        return res.status(422).json({
            message: "User Info Required???",
            status: false
        })
    }
    if (!req.body.name || !req.body.email || !req.body.city || !req.body.contact || !req.body.user_role) {
        return res.status(422).json({
            message: "Invalid User Info ???",
            status: false
        })
    }
    let Userrole = await user_roles.findOne({ user_role: req.body.user_role });
    if (Userrole && Userrole._id) {
        let userData = { name: req.body.name, password: req.body.password, email: req.body.email, city: req.body.city, contact: req.body.contact, user_roleId: Userrole._id }
        let user = await User.create(userData);
        if (user) {
            return res.status(200).json({
                message: "Success",
                data: user,
                status: true
            })
        } else {
            return res.status(500).json({
                message: "Somthing went wrong.",
                status: false
            })
        }
    } else {
        return res.status(422).json({
            message: "User-role does not exist...",
            status: false
        })
    }

}

export const login = async (req, res) => {
    let find = await User.find({ "name": req.body.name, "password": req.body.password });
    if (find) {
        return res.status(200).json({
            message: "Success",
            data: find,
            status: true
        })
    } else {
        return res.status(500).json({
            message: "User does not exist.",
            status: false
        })
    }
}


export const remove = async (req, res) => {
    let Remove = await User.deleteOne({ "name": req.body.name });
    if (Remove) {
        return res.status(200).json({
            message: "Success",
            data: Remove,
            status: true
        })
    } else {
        return res.status(500).json({
            message: "Something went Wrong.",
            status: false
        })
    }
}

export const editData = async (req, res) => {
    let userData = { name: req.body.name, password: req.body.password, email: req.body.email, city: req.body.city, contact: req.body.contact }
    let update = await User.findOneAndUpdate({ "email": req.body.Email }, userData, { new: true });
    if (update) {
        return res.status(200).json({
            message: "Success",
            data: update,
            status: true
        })
    } else {
        return res.status(500).json({
            message: "Something went Wrong.",
            status: false
        })
    }
}

export const getUser = async (req,res)=>{
    console.log(req.user);
    const myProfile = await User.find({_id:req.user.id});
    return res.status(200).json({
        message:'Success',
        data:myProfile,
        status:true
    })
}