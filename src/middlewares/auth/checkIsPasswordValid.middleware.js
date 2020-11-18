const {
    enums: {
        responseStatusCode: {
            ResponseStatusCodeEnum
        }
    }
} = require('../../constants');
const {passwordValidator} = require('../../validators');
const {ErrorHandler, errors} = require('../../errors');

module.exports = (req, res, next) => {
    const {password} = req.body;

    if (!password) {
        return next(
            new ErrorHandler(
                ResponseStatusCodeEnum.BAD_REQUEST,
                errors.BAD_REQUEST_WRONG_PARAMS.message,
                errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const {error} = passwordValidator.validate(password);

    if (error) {
        return next(
            new ErrorHandler(ResponseStatusCodeEnum.BAD_REQUEST, error.details[0].message));
    }

    next();
};
