require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Find all admin users
    const admins = await Admin.find({});
    console.log(
      "All admin users:",
      admins.map((a) => ({ username: a.username, id: a._id }))
    );

    // Test finding the specific user
    const admin = await Admin.findOne({ username: "kapil" });
    if (admin) {
      console.log("Found admin user:", admin.username);

      // Test password verification
      const testPassword = "qwerty@123";
      const isMatch = await bcrypt.compare(testPassword, admin.password);
      console.log("Password match:", isMatch);
    } else {
      console.log('Admin user "kapil" not found');
    }

    process.exit(0);
  })
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
