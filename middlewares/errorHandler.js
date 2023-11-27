const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  switch (statusCode) {
    case 400:
      res.json({
        title: "Validation Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case 404:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case 500:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log("No error, All good!");
      break;
  }
};

module.exports = errorHandler;
