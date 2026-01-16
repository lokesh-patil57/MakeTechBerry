import Internship from "../models/Internship.model.js";

export const registerInternship = async (req, res) => {
  try {
    const internship = await Internship.create({
      ...req.body,
      resume: req.file.path,
    });

    res.status(201).json({
      success: true,
      message: "Internship registered successfully",
      data: internship,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: internships,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
