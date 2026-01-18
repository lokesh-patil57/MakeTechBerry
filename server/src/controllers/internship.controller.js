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

export const deleteInternship = async (req, res) => {
  try {
    const { id } = req.params;
    const internship = await Internship.findByIdAndDelete(id);

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: "Internship not found",
      });
    }

    // Also delete related reports
    const Report = (await import("../models/Report.model.js")).default;
    await Report.deleteMany({ 
      type: "Internship",
      originalId: id 
    });

    res.status(200).json({
      success: true,
      message: "Internship deleted successfully",
      data: internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const approveInternship = async (req, res) => {
  try {
    const { id } = req.params;
    const internship = await Internship.findByIdAndUpdate(
      id,
      { status: "Approved" },
      { new: true }
    );

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: "Internship not found",
      });
    }

    // Create report entry
    const Report = (await import("../models/Report.model.js")).default;
    await Report.create({
      type: "Internship",
      action: "Approved",
      originalId: id,
      data: internship.toObject(),
    });

    res.status(200).json({
      success: true,
      message: "Internship approved successfully",
      data: internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const rejectInternship = async (req, res) => {
  try {
    const { id } = req.params;
    const internship = await Internship.findByIdAndUpdate(
      id,
      { status: "Rejected" },
      { new: true }
    );

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: "Internship not found",
      });
    }

    // Create report entry
    const Report = (await import("../models/Report.model.js")).default;
    await Report.create({
      type: "Internship",
      action: "Rejected",
      originalId: id,
      data: internship.toObject(),
    });

    res.status(200).json({
      success: true,
      message: "Internship rejected successfully",
      data: internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
