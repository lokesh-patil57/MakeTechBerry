import express from "express";
import upload from "../middlewares/upload.middleware.js";
import {
  registerInternship,
  getAllInternships
} from "../controllers/internship.controller.js";

const router = express.Router();

router.post(
  "/register",
  upload.single("resume"),
  registerInternship
);

router.get("/", getAllInternships);

export default router;
