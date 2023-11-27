const express = require("express");
const {
  createBooking,
  getLatestBooking,
} = require("../controllers/movieBookingController");
const router = express.Router();

// Routes
router.route("/").post(createBooking);
router.route("/").get(getLatestBooking);

module.exports = router;
