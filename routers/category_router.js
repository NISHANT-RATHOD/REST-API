import express from "express"
import { cheking } from "../controllers/category_controller"
import { list } from "../controllers/category_controller";
import { AddCategory } from "../controllers/category_controller";
import { categoryfind } from "../controllers/category_controller";
import { removeCategory } from "../controllers/category_controller";
import { editData } from "../controllers/category_controller";
const router = express.Router();


router.post("/",(req,res)=>{
    res.json("Router Working");
})

router.post("/controller-check",cheking);
router.post("/list",list);
router.post("/add-category",AddCategory);
router.post("/filter",categoryfind);
router.post("/delete",removeCategory);
router.post("/update-category",editData); 
export default router;