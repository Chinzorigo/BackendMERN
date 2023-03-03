const logger = (req, res, next) => {
  req.userId = "213";
  console.log(`${req.method} ${req.protocol}://${req.hostname}${req.originalUrl}`);
  next();
};

module.exports = logger;
