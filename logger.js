const winston = require('winston');

const logger = winston.createLogger({

  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'info.log', level: 'info' }),
    new winston.transports.File({ filename: 'warn.log', level: 'warn' }),
  ],
});
module.exports = logger;
