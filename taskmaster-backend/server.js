const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
const taskRoutes = require("./routes/tasks");
const userRoutes = require("./routes/user.routes");
// or './routes/user.routes' if that's the correct name

app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

// ✅ Connect to MongoDB and Start Server
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/taskmaster", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });
