const {verify} = require('jsonwebtoken');

const {
    enums: {
        responseStatusCode: {
            ResponseStatusCodeEnum
        }
    }
} = require('../../constants');
const {globalConfig} = require('../../configs');
const {userService} = require('../../services');
const {ErrorHandler, errors} = require('../../errors');

module.exports = async (req, res, next) => {
    try {
        const access_token = req.get('Authorization');

        if (!access_token) {
            return next(new ErrorHandler(ResponseStatusCodeEnum.BAD_REQUEST, 'No token'));
        }

        verify(access_token, globalConfig.JWT_SECRET, err => {
            if (err) {
                return next(new ErrorHandler(ResponseStatusCodeEnum.UNAUTHORIZED, 'Invalid token'));
            }
        });

        const user = await userService.getByAccessToken(access_token);

        if (!user) {
            return next(new ErrorHandler(ResponseStatusCodeEnum.NOT_FOUND, errors.NOT_FOUND_ENTITY_NOT_PRESENT.message));
        }

        req.authUser = user;
        req.access_token = access_token;

        next();

    } catch (error) {
        next(error);
    }
};
