import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/user.model.js";

// ================== SIGNUP ==================
export async function signupService(data) {
  // ❗ DO NOT hash here if already done in model
  return await createUser(data.name, data.email, data.password);
}

// ================== LOGIN ==================
export async function loginService(email, password) {
  const user = await findUserByEmail(email);
  if (!user) return null;

  const match = await bcrypt.compare(password, user.password);
  if (!match) return null;

  // 🔐 Generate JWT
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET || "default_secret_for_dev_only",
    { expiresIn: "1d" }
  );

  return token;
}