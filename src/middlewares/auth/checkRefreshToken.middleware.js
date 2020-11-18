const {verify} = require('jsonwebtoken');

const {
    enums: {
        responseStatusCode: {
            ResponseStatusCodeEnum
        }
    }
} = require('../../constants');
const {userService} = require('../../services');
const {globalConfig} = require('../../configs');
const {ErrorHandler, errors} = require('../../errors');

module.exports = async (req, res, next) => {
    try {
        const refresh_token = req.get('Authorization');

        if (!refresh_token) {
            return next(new ErrorHandler(ResponseStatusCodeEnum.BAD_REQUEST, 'No token'));
        }

        verify(refresh_token, globalConfig.JWT_REFRESH_SECRET, async err => {
            if (err) {
                await authService.deleteAuthTokenByRefreshToken(refresh_token);

                return next(new ErrorHandler(ResponseStatusCodeEnum.FORBIDDEN, 'Bad_tokens'));
            }
        });

        const user = await userService.getByRefreshToken(refresh_token);

        if (!user) {
            return next(new ErrorHandler(ResponseStatusCodeEnum.NOT_FOUND, errors.NOT_FOUND_ENTITY_NOT_PRESENT.message));
        }

        req.user = user;

        next();

    } catch (error) {
        next(error);
    }
};
