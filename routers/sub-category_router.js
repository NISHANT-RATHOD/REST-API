import express from "express"
import { checking } from "../controllers/sub-category_controller";
import { AddSub_Category } from "../controllers/sub-category_controller";
import { list } from "../controllers/sub-category_controller";
import { updateSub_category } from "../controllers/sub-category_controller";
import { removeSub_category } from "../controllers/sub-category_controller";
const router = express.Router();

router.post("/",(req,res)=>{
    res.json("Router is Working");
})

router.post("/check-controller",checking);
router.post("/add-sub-category",AddSub_Category);
router.post("/list",list);
router.post("/update",updateSub_category);
router.post("/delete",removeSub_category); 
export default router;