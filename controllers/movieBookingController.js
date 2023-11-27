const asyncHandler = require("express-async-handler");
const MovieBooking = require("../models/movieBookingModel");

//@desc POST create a booking
//@route GET /api/booking
//@access public
const createBooking = asyncHandler(async (req, res) => {
  const { movie, slot, seats } = req.body;

  if (!movie || !slot || !seats) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const booking = await MovieBooking.create({
    movie,
    slot,
    seats,
  });
  res.status(200).json(booking);
});

//@desc GET get the latest booking
//@route GET /api/booking
//@access public
const getLatestBooking = asyncHandler(async (req, res) => {
  const booking = await MovieBooking.find().sort({ createdAt: -1 }).limit(1);
  console.log(booking[0]);
  res.status(200).json(booking);
});

module.exports = {
  createBooking,
  getLatestBooking,
};
