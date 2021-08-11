const { winston, format, createLogger, transports } = require("winston");
const { timestamp, combine, printf } = format;

const myFormat = printf(({ level, message, timestamp,stack }) => {
  return `${timestamp} ${level}: ${stack ||message}`;
});

const logger = createLogger({
  level: "debug",
  format: combine(
    format.colorize(),
    format.errors({stack:true}),
    timestamp({ format: "YY-MM-DD HH:mm:ss" }),
    myFormat
  ),
  //   defaultMeta: { service: 'user-service' },
  transports: [
    // new transports.Console(),
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new transports.File({ filename: 'logger/info.log', level: 'info' }),
    new transports.File({ filename: 'logger/combined.log'}),
  ],
});

module.exports = logger;
