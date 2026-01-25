import Project from "../models/Project.model.js";
import ShowcaseProject from "../models/ShowcaseProject.model.js";

export const registerProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      message: "Project request submitted successfully",
      data: project
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Also delete related reports
    const Report = (await import("../models/Report.model.js")).default;
    await Report.deleteMany({ 
      type: "Project",
      originalId: id 
    });

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const approveProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(
      id,
      { status: "Approved" },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Create report entry
    const Report = (await import("../models/Report.model.js")).default;
    await Report.create({
      type: "Project",
      action: "Approved",
      originalId: id,
      data: project.toObject(),
    });

    res.status(200).json({
      success: true,
      message: "Project approved successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const rejectProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(
      id,
      { status: "Rejected" },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Create report entry
    const Report = (await import("../models/Report.model.js")).default;
    await Report.create({
      type: "Project",
      action: "Rejected",
      originalId: id,
      data: project.toObject(),
    });

    res.status(200).json({
      success: true,
      message: "Project rejected successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ========== SHOWCASE PROJECT CONTROLLERS ==========

// Get all showcase projects (public - no auth required)
export const getShowcaseProjects = async (req, res) => {
  try {
    const { status } = req.query;
    let query = {};
    
    if (status) {
      query.status = status.toLowerCase();
    }

    const projects = await ShowcaseProject.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get showcase projects by status (public endpoint)
export const getShowcaseProjectsByStatus = async (req, res) => {
  try {
    const projects = await ShowcaseProject.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get single showcase project (admin)
export const getShowcaseProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await ShowcaseProject.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Create showcase project (admin only)
export const createShowcaseProject = async (req, res) => {
  try {
    const project = await ShowcaseProject.create(req.body);

    res.status(201).json({
      success: true,
      message: "Showcase project created successfully",
      data: project
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Update showcase project (admin only)
export const updateShowcaseProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await ShowcaseProject.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Showcase project updated successfully",
      data: project
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Delete showcase project (admin only)
export const deleteShowcaseProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await ShowcaseProject.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Showcase project deleted successfully",
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Change showcase project status (admin only)
export const changeShowcaseProjectStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !["ongoing", "completed"].includes(status.toLowerCase())) {
      return res.status(400).json({
        success: false,
        message: "Status must be either 'ongoing' or 'completed'"
      });
    }

    const project = await ShowcaseProject.findByIdAndUpdate(
      id,
      { status: status.toLowerCase() },
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Project status updated successfully",
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
