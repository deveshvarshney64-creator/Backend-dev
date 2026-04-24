import fs from "fs/promises";
import bcrypt from "bcryptjs";

const FILE_PATH = "users.json";

// 🔹 Get all users
export async function getAllUsers() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    // ✅ If file doesn't exist, return empty array
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

// 🔹 Create user (signup)
export async function createUser(name, email, password) {
  try {
    const users = await getAllUsers();

    const exists = users.find((u) => u.email === email);
    if (exists) return null;

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id: Date.now().toString(),
      name,
      email: email.trim().toLowerCase(),
      password: hashedPassword,
    };

    users.push(user);

    await fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2));

    return user;
  } catch (err) {
    console.error("Error creating user:", err.message);
    throw err;
  }
}

// 🔹 Find user by email
export async function findUserByEmail(email) {
  try {
    const users = await getAllUsers();
    const normalizedEmail = email.trim().toLowerCase();
    return users.find((u) => u.email === normalizedEmail);
  } catch (err) {
    console.error("Error finding user:", err.message);
    throw err;
  }
}