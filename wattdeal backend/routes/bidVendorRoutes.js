const express = require("express");
const router = express.Router();
const {
  createBidVendorProduct,
  getBidVendorProducts,
} = require("../controller/bidVendorController");
const upload = require("../middleware/cloudinaryStorage");

router.post("/", upload.single("image"), createBidVendorProduct);
router.get("/", getBidVendorProducts);

module.exports = router;
