import express from "express"
import auth from "../middleware/authMiddleware.js"
import rateLimiter from "../middleware/rateLimiter.js"
import * as tx from "../controllers/transactionController.js"

const router = express.Router()

router.post("/", auth, rateLimiter, tx.createTransaction)

export default router