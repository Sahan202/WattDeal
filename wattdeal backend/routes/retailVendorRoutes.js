const express = require("express");
const router = express.Router();
const upload = require("../middleware/cloudinaryStorage");
const {
  uploadRetailItem,
  getAllItems,
} = require("../controller/retailVendorController");

router.post("/", upload.single("image"), uploadRetailItem);
router.get("/", getAllItems);

module.exports = router;
