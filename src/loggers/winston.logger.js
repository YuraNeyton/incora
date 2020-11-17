const winston = require('winston');

const {winstonConfig} = require('../configs');

module.exports = winston.createLogger({
    transports: [
        new (winston.transports.File)(winstonConfig.errorFile)
    ],
    exitOnError: false
});
