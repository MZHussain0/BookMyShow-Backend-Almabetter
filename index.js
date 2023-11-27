const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

// Connect to DB
connectDb();
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Route logger middleware
app.use((req, res, next) => {
  console.log(`Route: ${req.method} ${req.path}`);
  next();
});

// Routes
app.use("/api/booking", require("./routes/movieBookingRoutes"));

// Error Handler
app.use(errorHandler);

// Start server
app.listen(port, () => console.log("listening on port " + process.env.PORT));
