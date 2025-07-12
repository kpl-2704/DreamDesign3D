const express = require("express");
const router = express.Router();
const GalleryImage = require("../models/GalleryImage");
const multer = require("multer");
const path = require("path");

// Multer setup for local uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname.replace(/\s+/g, "_"));
  },
});
const upload = multer({ storage });

// Get all images
router.get("/", async (req, res) => {
  console.log("GET /api/gallery called");
  try {
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    console.log("Fetched images:", images);
    res.json(images);
  } catch (err) {
    console.error("Gallery fetch error:", err);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

// Add a new image (accepts file upload or URL)
router.post("/", upload.single("file"), async (req, res) => {
  try {
    let src = req.body.src;
    if (req.file) {
      // If file uploaded, use its URL
      src = `/uploads/${req.file.filename}`;
    }
    const { category } = req.body;
    const image = new GalleryImage({ src, category });
    await image.save();
    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ error: "Failed to add image" });
  }
});

// Delete an image by ID (admin only - add auth in production)
router.delete("/:id", async (req, res) => {
  try {
    await GalleryImage.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete image" });
  }
});

module.exports = router;
