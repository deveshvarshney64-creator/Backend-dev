import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  try {
    // 🔹 Safe access to cookies
    const token = req.cookies?.token;

    if (!token) {
      return res.redirect("/auth/login");
    }

    // 🔹 Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 🔹 Attach user to request
    req.user = decoded;

    next();
  } catch (err) {
    console.error("Auth Error:", err.message);

    return res.redirect("/auth/login");
  }
}