const fetch = require("node-fetch");
require("dotenv").config();

const Log = async (stack = "backend", level = "info", pkg = "middleware", message = "default log") => {
  const allowedStacks = ["backend", "frontend"];
  const allowedLevels = ["debug", "info", "warn", "error", "fatal"];
  const allowedPackages = [
    "cache", "controller", "cron_job", "db", "domain", "handler", "repository", "route", "service", 
    "api", "component", "hook", "page", "state", "style",
    "auth", "config", "middleware", "utils" 
  ];

  if (
    !allowedStacks.includes(stack.toLowerCase()) ||
    !allowedLevels.includes(level.toLowerCase()) ||
    !allowedPackages.includes(pkg.toLowerCase())
  ) {
    console.error("Invalid stack, level, or package value");
    return;
  }

  try {
    const res = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
      body: JSON.stringify({
        stack: stack.toLowerCase(),
        level: level.toLowerCase(),
        package: pkg.toLowerCase(),
        message,
      }),
    });

    const data = await res.json();
    console.log(" Log submitted:", data);
  } catch (err) {
    console.error(" Logging failed:", err.message);
  }
};

module.exports = { Log };
