const mongoose = require("mongoose");

const TeamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String },
    photo: { type: String },
    role: { type: String },
    socialLinks: {
      linkedin: { type: String },
      instagram: { type: String },
      facebook: { type: String },
      twitter: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TeamMember", TeamMemberSchema);
