import express from "express";
import { check, ProductSubCategory } from "../controllers/product_controller";
import { AddProduct } from "../controllers/product_controller";
import { Productlist } from "../controllers/product_controller";
import { allListProducts } from "../controllers/product_controller";
import { filterProduct } from "../controllers/product_controller";
import { UpdateProduct } from "../controllers/product_controller";
import { deleteProduct } from "../controllers/product_controller";
const router = express.Router();

router.post("",(req,res)=>{
    res.json("Router is Working...");
})

router.post("/check-controller",check);
router.post("/add-product",AddProduct);
router.post("/sub-category/:id",ProductSubCategory);
router.post("/list",allListProducts)
router.post("/filter",filterProduct);
router.post("/update",UpdateProduct);
router.post("/delete",deleteProduct);
export default router ;