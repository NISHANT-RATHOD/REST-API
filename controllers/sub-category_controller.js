import sub_category from "../models/sub-category_model"
import category from "../models/category_model";

export const checking = (req, res) => {
    res.json("Controller is Working....");
}

export const list = async (req, res) => {
    let search = await category.findOne({ category: req.body.category })
    if (search && search._id) {
        let find = await sub_category.find({ categoryId: search._id }).populate('categoryId');
        if (find) {
            return res.status(200).json({
                message: "Success",
                data: find,
                status: true
            });
        } else {
            return res.status(500).json({
                message: "Category does Not exist...",
                status: false
            })
        }
    }
    if (!search) {
        let find = await sub_category.find({}).sort({ sub_category: 1 }).populate('categoryId');
        if (find) {
            return res.status(200).json({
                message: "Success",
                data: find,
                status: true
            });
        } else {
            return res.status(500).json({
                message: "Category does Not exist...",
                status: false
            })
        }
    }
    return res.status(500).json({
        message: "Category does Not exist.",
        status: false
    })

}



export const AddSub_Category = async (req, res) => {
    let findId = await category.findOne({ "category": req.body.category });
    if (findId && findId._id) {
        let add = await sub_category.create({ sub_category: req.body.sub_category, categoryId: findId._id });
        if (add) {
            return res.status(200).json({
                message: "Success",
                data: add,
                status: true
            })
        } else {
            return res.status(500).json({
                message: "Something went Wrong...??",
                status: false
            })
        }
    }
    return res.status(422).json({
        message: "Category does Not exist.",
        status: false
    })
}

export const updateSub_category = async (req, res) => {
    let update = await sub_category.findOneAndUpdate({ sub_category: req.body.Sub_category }, { sub_category: req.body.sub_category }, { new: true });
    if (update) {
        return res.status(200).json({
            message: "Success",
            data: update,
            status: true
        })
    } else {
        res.status(500).json({
            message: "Something went Wrong...",
            status: false
        })
    }
}


export const removeSub_category = async (req, res) => {
    let remove = await sub_category.deleteOne({ sub_category: req.body.sub_category });
    if (remove) {
        return res.status(200).json({
            message: "Success",
            data: remove,
            status: true
        })
    } else {
        return res.status(500).json({
            message: "Something went Wrong",
            status: false
        })
    }
}