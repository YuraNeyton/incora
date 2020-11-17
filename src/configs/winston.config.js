const {resolve} = require('path');

const {
    enums: {
        winston: {
            WinstonFileSizeEnum
        }
    }
} = require('../constants');

module.exports = {
    errorFile: {
        level: 'error',
        name: 'file.error',
        filename: resolve(process.cwd(), 'src', 'logs', 'error.log'),
        handleExceptions: true,
        json: true,
        maxsize: WinstonFileSizeEnum.MEGABYTES * WinstonFileSizeEnum.KILOBYTES * WinstonFileSizeEnum.BYTES,
        maxFiles: 100,
        colorize: true
    }
};
