import { readData, writeData } from "../modules/fileHandler.js";

// 🔹 Get all employees
export async function getEmployees() {
  try {
    return await readData();
  } catch (err) {
    console.error("Error fetching employees:", err.message);
    throw err;
  }
}

// 🔹 Add employee
export async function addEmployee(emp) {
  try {
    const data = await readData();

    // ✅ Auto-generate ID
    const newEmployee = {
      id: Date.now().toString(),
      ...emp,
    };

    data.push(newEmployee);

    await writeData(data);

    return newEmployee;
  } catch (err) {
    console.error("Error adding employee:", err.message);
    throw err;
  }
}

// 🔹 Delete employee
export async function deleteEmployee(id) {
  try {
    let data = await readData();

    const newData = data.filter((e) => e.id !== id);

    if (data.length === newData.length) {
      throw new Error("Employee not found");
    }

    await writeData(newData);

    return true;
  } catch (err) {
    console.error("Error deleting employee:", err.message);
    throw err;
  }
}

// 🔹 Update employee
export async function updateEmployee(id, newData) {
  try {
    const data = await readData();

    const index = data.findIndex((e) => e.id === id);

    if (index === -1) {
      throw new Error("Employee not found");
    }

    // ✅ Update safely
    data[index] = {
      ...data[index],
      ...newData,
      id, // prevent ID overwrite
    };

    await writeData(data);

    return data[index];
  } catch (err) {
    console.error("Error updating employee:", err.message);
    throw err;
  }
}