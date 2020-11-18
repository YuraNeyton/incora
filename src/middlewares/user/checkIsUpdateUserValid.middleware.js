const {
    enums: {
        responseStatusCode: {
            ResponseStatusCodeEnum
        }
    }
} = require('../../constants');
const {updateUserValidator} = require('../../validators');
const {ErrorHandler} = require('../../errors');

module.exports = (req, res, next) => {
    const updateFields = req.body;

    const {error} = updateUserValidator.validate(updateFields);

    if (error) {
        return next(new ErrorHandler(ResponseStatusCodeEnum.BAD_REQUEST, error.details[0].message));
    }

    next();
};
