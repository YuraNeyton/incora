const globalConfig = require('./global.config');
const {
    enums: {
        responseStatusCode: {
            ResponseStatusCodeEnum
        }
    }
} = require('../constants');
const {ErrorHandler, errors} = require('../errors');

module.exports = {
    origin: (origin, callback) => {
        const whiteList = globalConfig.FRONTEND_URL.split(';');

        if (!origin) {
            return callback(new ErrorHandler(
                ResponseStatusCodeEnum.FORBIDDEN,
                errors.CORS_NOT_ALLOWED.message,
                errors.CORS_NOT_ALLOWED.code
            ), false);
        }

        if (!whiteList.includes(origin)) {
            return callback(new ErrorHandler(
                ResponseStatusCodeEnum.FORBIDDEN,
                errors.CORS_NOT_ALLOWED.message,
                errors.CORS_NOT_ALLOWED.code
            ), false);
        }
        callback(null, true);
    }
};
