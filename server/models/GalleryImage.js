const mongoose = require("mongoose");

const GalleryImageSchema = new mongoose.Schema(
  {
    src: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("GalleryImage", GalleryImageSchema);
