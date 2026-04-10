import express from "express"
import auth from "../middleware/authMiddleware.js"
import * as user from "../controllers/userController.js"

const router = express.Router()

router.get("/profile", auth, user.getProfile)

export default router