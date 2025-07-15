const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../logging-middleware/.env") });
const { Log } = require("../../logging-middleware/log");

const logger = async (req, res, next) => {
  try {
    const stack = "backend"; 
    const level = "info";
    const pkg = "middleware"; 
    const message = `${req.method} ${req.originalUrl} hit`;

    await Log(stack, level, pkg, message);
  } catch (err) {
    console.error("Logger middleware failed:", err.message);
  }
  next();
};

module.exports = logger;
