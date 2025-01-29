export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ? err.statusCode : 500;
  res.json({ message: err.message, stackTrace: err.stack });
};
