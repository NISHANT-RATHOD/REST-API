import express from "express"
import { cheking } from "../controllers/user_controller"
import { UserProfiles } from "../controllers/user_controller";
import { createUser } from "../controllers/user_controller";
import { login } from "../controllers/user_controller"
import { remove } from "../controllers/user_controller"
import { editData } from "../controllers/user_controller";
const router = express.Router();

router.post("/", (req, res) => {
    res.json("Router is Working");
})

router.post("/controller-check", cheking);
router.get("/profiles",UserProfiles);
router.post("/sign-in", createUser);
router.post("/login", login);
router.post("/delete", remove);
router.post("/update", editData);

function isAuthorized(req, res, next) {
	console.log(req.headers)
	if(req.headers && req.headers.authorization) {
		var parts = req.headers.authorization.split(" ");
        if (parts.length == 2) {
            var scheme = parts[0];
            var credentials = parts[1];
            var token = credentials
           
            var decoded = jwt.verify(token, 'keyForEncryption');
			console.log(decoded, 'decoded');
			if(decoded && decoded.id) {
				req.user = decoded;
				next()
			} else {
				return res.json(401, { err: "Invalid token" });
			}
        } else {
            return res.json(401, { err: "Format is Authorization: Bearer [token]" });
        }
	}else {
		return res.status(401).json({
			status: false,
			message: 'Authorization token is required'
		})
	}
}


export default router