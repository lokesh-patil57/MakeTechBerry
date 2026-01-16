import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    college: {
      type: String,
    },
    resume: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Internship", internshipSchema);
