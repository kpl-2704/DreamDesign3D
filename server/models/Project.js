const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["in-progress", "completed"],
      default: "in-progress",
    },
    images: [{ type: String }],
    location: { type: String },
    scope: { type: String },
    duration: { type: String },
    client: { type: String },
    testimonial: { type: mongoose.Schema.Types.ObjectId, ref: "Testimonial" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
