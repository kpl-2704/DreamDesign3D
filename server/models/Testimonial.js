const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true },
    quote: { type: String, required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    rating: { type: Number, min: 1, max: 5 },
    videoUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", TestimonialSchema);
