import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  getAllEmployees,
  createEmployee,
  removeEmployee,
  editEmployee
} from "../services/employee.service.js";

const router = express.Router();

// 🔒 Apply auth middleware to all routes
router.use(authMiddleware);

// ================== GET ALL ==================
router.get("/", async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.render("index", { employees });
  } catch (err) {
    console.error("Fetch Error:", err.message);
    res.status(500).send("Failed to load employees");
  }
});

// ================== ADD ==================
router.get("/add", (req, res) => {
  res.render("add");
});

router.post("/add", async (req, res) => {
  try {
    await createEmployee(req.body);
    res.redirect("/employees");
  } catch (err) {
    console.error("Create Error:", err.message);
    res.status(500).send("Failed to add employee");
  }
});

// ================== DELETE ==================
router.get("/delete/:id", async (req, res) => {
  try {
    await removeEmployee(req.params.id);
    res.redirect("/employees");
  } catch (err) {
    console.error("Delete Error:", err.message);
    res.status(500).send("Failed to delete employee");
  }
});

// ================== EDIT ==================
router.get("/edit/:id", async (req, res) => {
  try {
    const employees = await getAllEmployees();

    const employee = employees.find(
      (e) => e.id === req.params.id
    );

    if (!employee) {
      return res.status(404).send("Employee not found");
    }

    res.render("edit", { employee });
  } catch (err) {
    console.error("Edit Fetch Error:", err.message);
    res.status(500).send("Something went wrong");
  }
});

router.post("/edit/:id", async (req, res) => {
  try {
    await editEmployee(req.params.id, req.body);
    res.redirect("/employees");
  } catch (err) {
    console.error("Update Error:", err.message);
    res.status(500).send("Failed to update employee");
  }
});

export default router;