const {
    enums: {
        responseStatusCode: {
            ResponseStatusCodeEnum
        }
    }
} = require('../../constants');
const {idValidator} = require('../../validators');
const {userService} = require('../../services');
const {ErrorHandler, errors} = require('../../errors');

module.exports = async (req, res, next) => {
    try {
        const {user_id} = req.params;

        if (!user_id) {
            return next();
        }

        const {error} = idValidator.validate(+user_id);

        if (error) {
            return next(
                new ErrorHandler(
                    ResponseStatusCodeEnum.BAD_REQUEST,
                    errors.BAD_REQUEST_WRONG_PARAMS.message,
                    errors.BAD_REQUEST_WRONG_PARAMS.code));
        }

        const user = await userService.getById(+user_id);

        if (!user) {
            return next(new ErrorHandler(
                ResponseStatusCodeEnum.NOT_FOUND,
                errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
                errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
        }

        req.user = user;
        next();

    } catch (error) {
        next(error);
    }
};
