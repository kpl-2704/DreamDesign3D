const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema(
  {
    yearsOfExperience: { type: String, required: true },
    projectsCompleted: { type: String, required: true },
    activeProjects: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stats", StatsSchema);
