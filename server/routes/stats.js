const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");

// Get current stats
router.get("/", async (req, res) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) {
      // If not found, create default
      stats = await Stats.create({
        yearsOfExperience: "5+",
        projectsCompleted: "2000+",
        activeProjects: "10+",
      });
    }
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

// Update stats (admin only - add auth in production)
router.put("/", async (req, res) => {
  try {
    const { yearsOfExperience, projectsCompleted, activeProjects } = req.body;
    let stats = await Stats.findOne();
    if (!stats) {
      stats = new Stats({
        yearsOfExperience,
        projectsCompleted,
        activeProjects,
      });
    } else {
      stats.yearsOfExperience = yearsOfExperience;
      stats.projectsCompleted = projectsCompleted;
      stats.activeProjects = activeProjects;
    }
    await stats.save();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: "Failed to update stats" });
  }
});

module.exports = router;
