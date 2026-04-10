import express from "express"
import * as auth from "../controllers/authController.js"
import validate from "../middleware/validation.js"

const router = express.Router()

router.post("/register", validate, auth.register)
router.post("/login", validate, auth.login)

export default router