const mongoose = require("mongoose");

/**
 * Connects to the MongoDB database using the provided MONGO_URI.
 * Prints the connection details if the connection is successful.
 * Exits the process with an error code if the connection fails.
 */
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      "Database connection established: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
