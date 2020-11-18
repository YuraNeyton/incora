const {
    enums: {
        responseStatusCode: {
            ResponseStatusCodeEnum
        }
    }
} = require('../../constants');
const {
    hashers: {
        CHECK_HASH
    }
} = require('../../helpers');
const {ErrorHandler, errors} = require('../../errors');

module.exports = async (req, res, next) => {

    const {password: hashPassword} = req.user;
    const {password} = req.body;

    const isPasswordCorrect = await CHECK_HASH(password, hashPassword);

    if (!isPasswordCorrect) {
        return next(
            new ErrorHandler(
                ResponseStatusCodeEnum.NOT_FOUND,
                errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
                errors.NOT_FOUND_ENTITY_NOT_PRESENT.code
            ));
    }

    next();
};
