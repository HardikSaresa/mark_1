const notFound = (req, res, next) => {
  const customError = new Error(`not found-${req.originalUrl}`);
  res.status(404);
  next(customError);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    Message: err.message, // Change "Message" to "message"
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };
