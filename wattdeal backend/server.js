const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const authRoutes = require("./routes/authRouuters");
const shopRoutes = require("./routes/shopRoutes");
const bidVendorRoutes = require("./routes/bidVendorRoutes");
const cartRoutes = require("./routes/cartRoutes");
const retailVendorRoutes = require("./routes/retailVendorRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api", shopRoutes);
app.use("/api/retail-vendor", retailVendorRoutes);
app.use("/api", cartRoutes);
app.use("/api/bid-vendor", bidVendorRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error("Mongo error:", err));

// Optional: Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Something went wrong" });
});
