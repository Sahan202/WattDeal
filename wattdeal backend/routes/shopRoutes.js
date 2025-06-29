const express = require("express");
const router = express.Router();
const { createShop, getShops } = require("../controller/shopController");
const upload = require("../middleware/cloudinaryStorage");

router.post("/shops", upload.single("image"), createShop);
router.get("/shops", getShops);

module.exports = router;
