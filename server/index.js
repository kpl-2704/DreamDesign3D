require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Atlas connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Basic route
app.get("/", (req, res) => {
  res.send("<h1>DreamDesign3D API is running</h1>");
});

const adminRoutes = require("./routes/admin");
app.use("/api/admin", adminRoutes);

const whatsappRoutes = require("./routes/whatsapp");
app.use("/api/whatsapp", whatsappRoutes);

const statsRoutes = require("./routes/stats");
app.use("/api/stats", statsRoutes);

const galleryRoutes = require("./routes/gallery");
app.use("/api/gallery", galleryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
