import express from "express";
import { listUserRole } from "../controllers/user-role_controller";
import { AddUserRole } from "../controllers/user-role_controller"
import { UpdateUserRole } from "../controllers/user-role_controller";
import { deleteUserRole } from "../controllers/user-role_controller";
const router = express.Router();

router.post("/",(req,res)=>{
    res.json("Router is Working...");
})
router.post("/add-user-role",AddUserRole);
router.post("/list",listUserRole);
router.post("/update",UpdateUserRole);
router.post("/delete",deleteUserRole);
export default router;