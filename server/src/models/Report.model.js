import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["Internship", "Project"],
      required: true,
    },
    action: {
      type: String,
      enum: ["Approved", "Rejected"],
      required: true,
    },
    originalId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    // Store full data as JSON
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    approvedAt: {
      type: Date,
      default: Date.now,
    },
    // Auto-delete after 2 months
    expiresAt: {
      type: Date,
      default: function() {
        const date = new Date();
        date.setMonth(date.getMonth() + 2);
        return date;
      },
    },
  },
  { timestamps: true }
);

// Index for automatic cleanup of expired reports
reportSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model("Report", reportSchema);
