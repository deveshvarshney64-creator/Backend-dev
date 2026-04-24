import express from "express";
import signupMidd from "../middleware/signup.middleware.js";
import loginMidd from "../middleware/login.middleware.js";
import { signupService, loginService } from "../services/auth.service.js";

const router = express.Router();

// ================== SIGNUP ==================
router.get("/signup", (req, res) => {
  if (req.cookies?.token) {
    return res.redirect("/employees");
  }
  res.render("signup");
});

router.post("/signup", signupMidd, async (req, res) => {
  try {
    const user = await signupService(req.body);

    if (!user) {
      return res.render("signup", { error: "User already exists" });
    }

    res.redirect("/auth/login");
  } catch (err) {
    console.error("Signup Error:", err.message);
    res.status(500).render("signup", { error: "Something went wrong" });
  }
});

// ================== LOGIN ==================
router.get("/login", (req, res) => {
  if (req.cookies?.token) {
    return res.redirect("/employees");
  }
  res.render("login");
});

router.post("/login", loginMidd, async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await loginService(email, password);

    if (!token) {
      return res.render("login", {
        error: "Invalid email or password",
      });
    }

    // 🍪 Set cookie (improved)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // 🔥 auto switch
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.redirect("/employees");
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).render("login", { error: "Something went wrong" });
  }
});

// ================== LOGOUT ==================
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/auth/login");
});

export default router;