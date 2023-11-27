const mongoose = require("mongoose");

// Define a Seats schema
const seatsSchema = new mongoose.Schema({
  A1: { type: Number },
  A2: { type: Number },
  A3: { type: Number },
  A4: { type: Number },
  D1: { type: Number },
  D2: { type: Number },
  _id: false,
});
// Schema of Movie Booking System
const movieBookingSchema = new mongoose.Schema(
  {
    movie: { type: String, required: true }, // name of the movie
    slot: { type: String, required: true }, // time slot of the movie
    seats: seatsSchema, // seats available in the movie theatre
  },
  {
    timestamps: true,
  }
);

// Registering the schema with mongoose model.
module.exports = mongoose.model("MovieBooking", movieBookingSchema);
