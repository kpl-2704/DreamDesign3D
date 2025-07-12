const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    heading: { type: String, required: true },
    subtext: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Banner", BannerSchema);
