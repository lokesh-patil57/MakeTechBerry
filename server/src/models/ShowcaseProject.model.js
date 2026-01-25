import mongoose from "mongoose";

const showcaseProjectSchema = new mongoose.Schema(
  {
    projectTitle: {
      type: String,
      required: true,
      trim: true
    },
    projectDescription: {
      type: String,
      required: true
    },
    techStack: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["ongoing", "completed"],
      default: "ongoing",
      required: true
    },
    teamMembers: {
      type: [String],
      default: []
    },
    role: {
      type: String,
      trim: true
    },
    featuredImage: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("ShowcaseProject", showcaseProjectSchema);
