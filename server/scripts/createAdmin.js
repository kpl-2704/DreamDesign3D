require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

const [, , username, password] = process.argv;

if (!username || !password) {
  console.error("Usage: node scripts/createAdmin.js <username> <password>");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const existing = await Admin.findOne({ username });
    if (existing) {
      console.error("Admin with this username already exists.");
      process.exit(1);
    }
    const hashed = await bcrypt.hash(password, 10);
    const admin = new Admin({ username, password: hashed });
    await admin.save();
    console.log("Admin user created successfully!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
