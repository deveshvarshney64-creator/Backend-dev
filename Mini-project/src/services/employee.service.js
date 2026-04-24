import {
  getEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee
} from "../models/employee.model.js";

// ================== GET ==================
export async function getAllEmployees() {
  try {
    return await getEmployees();
  } catch (err) {
    console.error("Fetch Employees Error:", err.message);
    throw err;
  }
}

// ================== CREATE ==================
export async function createEmployee(data) {
  try {
    // 🔐 Validation
    if (!data.name || typeof data.name !== "string") {
      throw new Error("Invalid name");
    }

    const salary = Number(data.salary);

    if (isNaN(salary) || salary < 0) {
      throw new Error("Invalid salary");
    }

    const newEmployee = await addEmployee({
      name: data.name.trim(),
      department: data.department || "General",
      salary,
    });

    return newEmployee;
  } catch (err) {
    console.error("Create Employee Error:", err.message);
    throw err;
  }
}

// ================== DELETE ==================
export async function removeEmployee(id) {
  try {
    const result = await deleteEmployee(id);
    return result;
  } catch (err) {
    console.error("Delete Employee Error:", err.message);
    throw err;
  }
}

// ================== UPDATE ==================
export async function editEmployee(id, data) {
  try {
    const updatedData = {};

    if (data.name) updatedData.name = data.name.trim();

    if (data.salary !== undefined) {
      const salary = Number(data.salary);
      if (isNaN(salary) || salary < 0) {
        throw new Error("Invalid salary");
      }
      updatedData.salary = salary;
    }

    if (data.department) {
      updatedData.department = data.department;
    }

    const updatedEmployee = await updateEmployee(id, updatedData);

    return updatedEmployee;
  } catch (err) {
    console.error("Update Employee Error:", err.message);
    throw err;
  }
}