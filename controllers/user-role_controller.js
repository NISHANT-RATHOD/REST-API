import user_roles from "../models/user-role_model";

export const AddUserRole = async (req, res) => {
    let add = await user_roles.create({ user_role: req.body.user_role });
    if (add) {
        return res.status(200).json({
            message: "Success",
            data: add,
            status: true
        })
    } else {
        return res.status(500).json({
            message: "Something went Wrong...",
            status: false
        })
    }
}

export const listUserRole = async (req, res) => {
    let search = await user_roles.find({});
    if (search) {
        return res.status(200).json({
            message: "Success",
            data: search,
            status: true
        })
    }
}

export const UpdateUserRole = async (req, res) => {
    let update = await user_roles.findOneAndUpdate({ user_role: req.body.User_role }, { user_role: req.body.user_role }, { new: true });
    if (update) {
        return res.status(200).json({
            message: "Success",
            data: update,
            status: true
        })
    } else {
        return res.status(422).json({
            message: "Use_role does not exist",
            status: false
        })
    }
}

export const deleteUserRole = async (req, res) => {
    let remove = await user_roles.deleteOne({ user_role: req.body.user_role });
    if (remove) {
        return res.status(200).json({
            message: "Success",
            data: remove,
            status: true
        })
    } else {
        return res.status(422).json({
            message: "Use_role does not exist",
            status: false
        })
    }
}
