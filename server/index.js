require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// ✅ Proper CORS setup for Vercel frontend
app.use(
  cors({
    origin: "https://dream-design3-d.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

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

// Test route
app.get("/", (req, res) => {
  res.send("<h1>DreamDesign3D API is running</h1>");
});

// Routes
app.use("/api/admin", require("./routes/admin"));
app.use("/api/whatsapp", require("./routes/whatsapp"));
app.use("/api/stats", require("./routes/stats"));
app.use("/api/gallery", require("./routes/gallery"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
