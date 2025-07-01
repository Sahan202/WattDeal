const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    lat: { type: String },
    lng: { type: String },
    description: { type: String },
    saleType: { type: String },
    openingHours: { type: String },
    closingHours: { type: String },
    contactNumber: { type: String },
    websiteUrl: { type: String },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shop", shopSchema);
