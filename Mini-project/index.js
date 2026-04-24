import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./src/routes/auth.routes.js";
import employeeRoutes from "./src/routes/employee.routes.js";

dotenv.config();

const app = express();

// ================= MIDDLEWARES =================
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================= VIEW ENGINE =================
app.set("view engine", "ejs");
app.use(express.static("public"));

// ================= ROUTES =================
app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);

// ================= HOME ROUTE =================
app.get("/", (req, res) => {
   // ✅ JWT-based check (FIXED)
   if (req.cookies && req.cookies.token) {
       return res.redirect("/employees");
   } else {
       return res.redirect("/auth/login");
   }
});

// ================= SERVER =================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});