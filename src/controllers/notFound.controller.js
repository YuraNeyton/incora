const {
    enums: {
        responseStatusCode: {
            ResponseStatusCodeEnum
        }
    }
} = require('../constants');
const {ErrorHandler, errors} = require('../errors');

class NotFoundController {
    all(req, res) {
        throw new ErrorHandler(
            ResponseStatusCodeEnum.NOT_FOUND,
            errors.NOT_FOUND_ROUTE.message,
            errors.NOT_FOUND_ROUTE.code
        );
    }
}

module.exports = new NotFoundController();
