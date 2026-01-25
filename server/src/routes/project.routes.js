import express from "express";
import {
  registerProject,
  getAllProjects,
  deleteProject,
  approveProject,
  rejectProject,
  getShowcaseProjects,
  getShowcaseProjectsByStatus,
  getShowcaseProject,
  createShowcaseProject,
  updateShowcaseProject,
  deleteShowcaseProject,
  changeShowcaseProjectStatus
} from "../controllers/project.controller.js";
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();

// Project registration routes (for companies to register projects)
router.post("/register", registerProject);

// Admin-only routes for project registrations
router.get("/", protect, getAllProjects);
router.delete("/:id", protect, deleteProject);
router.patch("/:id/approve", protect, approveProject);
router.patch("/:id/reject", protect, rejectProject);

// ========== SHOWCASE PROJECT ROUTES ==========

// Public routes (no authentication required)
router.get("/public/status", getShowcaseProjectsByStatus);
router.get("/public", getShowcaseProjects);

// Admin-only routes for showcase projects
router.get("/showcase", protect, getShowcaseProjects);
router.get("/showcase/:id", protect, getShowcaseProject);
router.post("/showcase", protect, createShowcaseProject);
router.put("/showcase/:id", protect, updateShowcaseProject);
router.delete("/showcase/:id", protect, deleteShowcaseProject);
router.patch("/showcase/:id/status", protect, changeShowcaseProjectStatus);

export default router;
