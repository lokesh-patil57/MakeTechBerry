import express from "express";
import upload from "../middlewares/upload.middleware.js";
import {
  registerInternship,
  getAllInternships,
  deleteInternship,
  approveInternship,
  rejectInternship
} from "../controllers/internship.controller.js";
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/register",
  upload.single("resume"),
  registerInternship
);

// Admin-only routes
router.get("/", protect, getAllInternships);
router.delete("/:id", protect, deleteInternship);
router.patch("/:id/approve", protect, approveInternship);
router.patch("/:id/reject", protect, rejectInternship);

export default router;
