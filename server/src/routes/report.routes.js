import express from "express";
import {
  getAllReports,
  getReportsByType,
  getReportsByAction,
  deleteReport
} from "../controllers/report.controller.js";
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();

// Admin-only routes
router.get("/", protect, getAllReports);
router.get("/type/:type", protect, getReportsByType);
router.get("/action/:action", protect, getReportsByAction);
router.delete("/:id", protect, deleteReport);

export default router;
