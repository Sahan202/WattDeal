const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");

router.post("/cart", cartController.addToCart);
router.get("/cart/:userId", cartController.getCart);
router.put("/cart", cartController.updateCart);
router.delete("/cart/:userId", cartController.clearCart);

module.exports = router;
