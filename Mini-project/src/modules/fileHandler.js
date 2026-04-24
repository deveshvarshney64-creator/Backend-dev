import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("employees.json");

// 🔹 Read data
export async function readData() {
  try {
    const data = await fs.readFile(filePath, "utf-8");

    try {
      return JSON.parse(data || "[]");
    } catch (parseErr) {
      console.error("JSON Parse Error:", parseErr.message);
      return [];
    }

  } catch (err) {
    // ✅ File not found → create it
    if (err.code === "ENOENT") {
      await fs.writeFile(filePath, "[]");
      return [];
    }

    console.error("Read error:", err.message);
    throw err; // 🔥 don’t hide real errors
  }
}

// 🔹 Write data
export async function writeData(data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    console.error("Write error:", err.message);
    throw err; // 🔥 important
  }
}
