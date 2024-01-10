const { CustomAPIError } = require("../errors");
const { StarusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(StarusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
};

module.exports = errorHandlerMiddleware;
