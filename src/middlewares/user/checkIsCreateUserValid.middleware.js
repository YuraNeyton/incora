const {
    enums: {
        responseStatusCode: {
            ResponseStatusCodeEnum
        }
    }
} = require('../../constants');
const {createUserValidator} = require('../../validators');
const {ErrorHandler} = require('../../errors');

module.exports = (req, res, next) => {
    const user = req.body;

    const {error} = createUserValidator.validate(user);

    if (error) {
        return next(new ErrorHandler(ResponseStatusCodeEnum.BAD_REQUEST, error.details[0].message));
    }

    next();
};
