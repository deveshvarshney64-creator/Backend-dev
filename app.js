import express from "express"
import security from "./config/security.js"
import session from "./config/session.js"
import production from "./config/production.js"
import authRoutes from "./routes/authRoutes.js"
import transactionRoutes from "./routes/transactionRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import sanitize from "./middleware/sanitizeMiddleware.js"
import xss from "./middleware/xssProtection.js"
import errorHandler from "./middleware/errorHandler.js"

const app = express()

app.use(express.json())
app.use(security)
app.use(session)
production(app)
app.use(sanitize)
app.use(xss)

app.use("/auth", authRoutes)
app.use("/transactions", transactionRoutes)
app.use("/users", userRoutes)

app.use(errorHandler)

export default app