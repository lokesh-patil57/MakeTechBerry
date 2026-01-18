import express from "express";
import {
  registerProject,
  getAllProjects,
  deleteProject,
  approveProject,
  rejectProject
} from "../controllers/project.controller.js";
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerProject);

// Admin-only routes
router.get("/", protect, getAllProjects);
router.delete("/:id", protect, deleteProject);
router.patch("/:id/approve", protect, approveProject);
router.patch("/:id/reject", protect, rejectProject);

export default router;
