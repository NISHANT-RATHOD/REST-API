import Product from "../models/product_model"
import category from "../models/category_model"
import sub_category from "../models/sub-category_model"


export const check = (req, res) => {
     res.json("Controller is Working...")
}

export const AddProduct = async (req, res) => {
     let Category = await category.findOne({ category: req.body.category })
     let subcategory = await sub_category.findOne({ sub_category: req.body.sub_category, categoryId: Category._id });
     if (Category && subcategory) {
          let productData = { product_name: req.body.product_name, price: req.body.price, description: req.body.description, model_No: req.body.model_No, categoryId: Category._id, sub_categoryId: subcategory._id }
          let add = await Product.create(productData);
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
     } else {
          return res.status(422).json({
               message: "Category of Sub-category does not exist...",
               status: false
          })
     }
}


export const Productlist = async (req, res) => {
     // let Category = await category.findOne({ category: req.body.category });
     // let subcategory = await sub_category.findOne({ sub_category:req.pramas[id]});
     // let subcategory = await sub_category.findOne({ sub_category: req.body.sub_category });
     if (req.params.id) {
          // let search = await Product.find({ categoryId:req.params.id}).populate("categoryId").populate("sub_categoryId");
          let search1 = await Product.find({ sub_categoryId:req.params.id }).populate("categoryId").populate("sub_categoryId");
          // if (search) {
          //      return res.status(200).json({
          //           message: "Success",
          //           data: search,
          //           status: true
          //      })
          // } 
          if(search1){
               return res.status(200).json({
                    message: "Success",
                    data: search1,
                    status: true
               })
          }
          else {
               return res.status(500).json({
                    message: "Something went Wrong",
                    status: false
               })
          }
     }
     // if (req.params.id) {
     //      let search = await Product.find({ sub_categoryId:req.params.id }).populate("categoryId").populate("sub_categoryId");
     //      if (search) {
     //           return res.status(200).json({
     //                message: "Success",
     //                data: search,
     //                status: true
     //           })
     //      } else {
     //           return res.status(500).json({
     //                message: "Something went Wrong",
     //                status: false
     //           })
     //      }
     // }
     // if (!req.params.id){
     //      let search = await Product.find({}).populate("categoryId").populate("sub_categoryId");
     //      if (search) {
     //           return res.status(200).json({
     //                message: "Success",
     //                data: search,
     //                status: true
     //           })
     //      } else {
     //           return res.status(500).json({
     //                message: "Something went Wrong",
     //                status: false
     //           })
     //      }
     // } 
     else {
          return res.status(422).json({
               message: "Category of Sub-category does not exist...",
               status: false
          })
     }
}

export const ProductSubCategory = async (req, res) => {
     if (req.params.id) {
          let search = await Product.find({ sub_categoryId:req.params.id }).populate("categoryId").populate("sub_categoryId");
          if(search){
               return res.status(200).json({
                    message: "Success",
                    data: search,
                    status: true
               })
          }
          else {
               return res.status(500).json({
                    message: "Something went Wrong",
                    status: false
               })
          }
     }
     else {
          return res.status(422).json({
               message: " Sub-category does not exist...",
               status: false
          })
     }
}




export const allListProducts = async(req,res)=>{
     let search = await Product.find({}).populate("categoryId").populate("sub_categoryId");
     if (search) {
          return res.status(200).json({
               message: "Success",
               data: search,
               status: true
          })
     } else {
          return res.status(500).json({
               message: "Something went Wrong",
               status: false
          })
     }
}

export const filterProduct = async (req, res) => {
     let subCategory = await sub_category.findOne({ sub_category: req.body.sub_category });
     if (subCategory && subCategory._id) {
          let filter = await Product.find({ sub_categoryId: subCategory._id , price: { $gt: req.body.gt, $lt: req.body.lt } });
          if (filter) {
               return res.status(200).json({
                    message: "Success",
                    data: filter,
                    status: true
               })
          } else {
               return res.status(500).json({
                    message: "Something went Wrong",
                    status: false
               })
          }
     } else {
          return res.status(422).json({
               message: "Subcategory does not exist...",
               status: false
          })
     }
}

export const UpdateProduct = async (req, res) => {
     let productData = { product_name: req.body.product_name, price: req.body.price, description: req.body.description, model_No: req.body.model_No, categoryId: Category._id, sub_categoryId: subcategory._id }
     let update = await Product.findOneAndUpdate({ model_No: req.body.Model_No }, productData);
     if (update) {
          return res.status(200).json({
               message: "Success",
               data: update,
               status: true
          })
     } else {
          return res.status(422).json({
               message: "Product does not exist...",
               status: false
          })
     }
}

export const deleteProduct = async (req, res) => {
     let remove = await Product.findOneAndDelete({ model_No: req.body.Model_No });
     if (remove) {
          return res.status(200).json({
               message: "Success",
               data: remove,
               status: true
          })
     } else {
          return res.status(422).json({
               message: "Product does not exite",
               status: false
          })
     }
}