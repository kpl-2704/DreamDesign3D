const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");
const auth = require("../middleware/auth");

const Admin = require("../models/Admin");
const Project = require("../models/Project");
const Testimonial = require("../models/Testimonial");
const BlogPost = require("../models/BlogPost");
const TeamMember = require("../models/TeamMember");
const Banner = require("../models/Banner");

const router = express.Router();

// Multer + Cloudinary setup
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "projects",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});
const upload = multer({ storage });

// Admin login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(400).json({ message: "Invalid credentials" });
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.json({ token });
});

// Create project
router.post("/projects", auth, upload.array("images"), async (req, res) => {
  try {
    const imageUrls = req.files.map((file) => file.path);
    const project = new Project({ ...req.body, images: imageUrls });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all projects
router.get("/projects", auth, async (req, res) => {
  const projects = await Project.find().populate("testimonial");
  res.json(projects);
});

// Public: Get all projects (no auth)
router.get("/projects/public", async (req, res) => {
  const projects = await Project.find().populate("testimonial");
  res.json(projects);
});

// Update project
router.put("/projects/:id", auth, upload.array("images"), async (req, res) => {
  try {
    const imageUrls = req.files
      ? req.files.map((file) => file.path)
      : undefined;
    const update = { ...req.body };
    if (imageUrls) update.images = imageUrls;
    const project = await Project.findByIdAndUpdate(req.params.id, update, {
      new: true,
    });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete project
router.delete("/projects/:id", auth, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- TESTIMONIALS ---
// Create testimonial
router.post("/testimonials", auth, async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (err) {
    console.error("Testimonial Save Error:", err);
    res.status(500).json({ message: err.message, error: err });
  }
});
// Get all testimonials
router.get("/testimonials", auth, async (req, res) => {
  const testimonials = await Testimonial.find().populate("project");
  res.json(testimonials);
});
// Update testimonial
router.put("/testimonials/:id", auth, async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(testimonial);
  } catch (err) {
    console.error("Testimonial Update Error:", err);
    res.status(500).json({ message: err.message, error: err });
  }
});
// Delete testimonial
router.delete("/testimonials/:id", auth, async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: "Testimonial deleted" });
  } catch (err) {
    console.error("Testimonial Delete Error:", err);
    res.status(500).json({ message: err.message, error: err });
  }
});

// Public: Get all testimonials (no auth)
router.get("/testimonials/public", async (req, res) => {
  const testimonials = await Testimonial.find().populate("project");
  res.json(testimonials);
});

// --- BLOG POSTS ---
// Create blog post (with optional image)
router.post("/blog", auth, upload.single("image"), async (req, res) => {
  try {
    const image = req.file ? req.file.path : undefined;
    const blogPost = new BlogPost({ ...req.body, image });
    await blogPost.save();
    res.status(201).json(blogPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get all blog posts
router.get("/blog", auth, async (req, res) => {
  const posts = await BlogPost.find();
  res.json(posts);
});
// Update blog post
router.put("/blog/:id", auth, upload.single("image"), async (req, res) => {
  try {
    const image = req.file ? req.file.path : undefined;
    const update = { ...req.body };
    if (image) update.image = image;
    const post = await BlogPost.findByIdAndUpdate(req.params.id, update, {
      new: true,
    });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Delete blog post
router.delete("/blog/:id", auth, async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog post deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- TEAM MEMBERS ---
// Create team member (with photo)
router.post("/team", auth, upload.single("photo"), async (req, res) => {
  try {
    const photo = req.file ? req.file.path : undefined;
    const teamMember = new TeamMember({ ...req.body, photo });
    await teamMember.save();
    res.status(201).json(teamMember);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get all team members
router.get("/team", auth, async (req, res) => {
  const team = await TeamMember.find();
  res.json(team);
});
// Update team member
router.put("/team/:id", auth, upload.single("photo"), async (req, res) => {
  try {
    const photo = req.file ? req.file.path : undefined;
    const update = { ...req.body };
    if (photo) update.photo = photo;
    const member = await TeamMember.findByIdAndUpdate(req.params.id, update, {
      new: true,
    });
    res.json(member);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Delete team member
router.delete("/team/:id", auth, async (req, res) => {
  try {
    await TeamMember.findByIdAndDelete(req.params.id);
    res.json({ message: "Team member deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- BANNERS ---
// Create banner
router.post("/banners", auth, upload.single("image"), async (req, res) => {
  try {
    const image = req.file ? req.file.path : undefined;
    const banner = new Banner({ ...req.body, image });
    await banner.save();
    res.status(201).json(banner);
  } catch (err) {
    console.error("Banner Save Error:", err);
    res.status(500).json({ message: err.message, error: err });
  }
});
// Get all banners
router.get("/banners", async (req, res) => {
  const banners = await Banner.find();
  res.json(banners);
});
// Update banner
router.put("/banners/:id", auth, upload.single("image"), async (req, res) => {
  try {
    const image = req.file ? req.file.path : undefined;
    const update = { ...req.body };
    if (image) update.image = image;
    const banner = await Banner.findByIdAndUpdate(req.params.id, update, {
      new: true,
    });
    res.json(banner);
  } catch (err) {
    console.error("Banner Update Error:", err);
    res.status(500).json({ message: err.message, error: err });
  }
});
// Delete banner
router.delete("/banners/:id", auth, async (req, res) => {
  try {
    await Banner.findByIdAndDelete(req.params.id);
    res.json({ message: "Banner deleted" });
  } catch (err) {
    console.error("Banner Delete Error:", err);
    res.status(500).json({ message: err.message, error: err });
  }
});

module.exports = router;
