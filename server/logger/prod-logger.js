const { winston, format, createLogger, transports } = require("winston");
const { timestamp, combine, printf } = format;

function prodLogger() {
  return createLogger({
    level: "debug",
    format: combine(
      format.errors({ stack: true }),
      timestamp(),
      format.json()
    ),
      defaultMeta: { service: 'user-service' },
    transports: [
      // new transports.Console(),
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
      new transports.File({ filename: "logger/info.log", level: "info" }),
      new transports.File({ filename: "logger/combined.log" }),
    ],
  });
}
module.exports = prodLogger;
