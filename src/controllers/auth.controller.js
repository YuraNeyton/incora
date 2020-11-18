const {
    enums: {
        user: {
            UserActionEnum
        }
    }
} = require('../constants');
const {
    tokens: {
        tokenizerHelper
    }
} = require('../helpers');
const {authService} = require('../services');

class AuthController {

    async login(req, res, next) {
        try {
            const {id: user_id} = req.user;

            const tokens = tokenizerHelper(UserActionEnum.AUTH);

            await authService.createAuthToken({
                ...tokens,
                user_id
            });

            res.json({
                data: tokens
            });

        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next) {
        try {
            const access_token = req.access_token;

            if (access_token) {
                await authService.deleteAuthTokenByAccessToken(access_token);
            }

            res.end();

        } catch (error) {
            next(error);
        }
    }

    async refreshToken(req, res, next) {
        try {
            const {id} = req.user;
            const tokens = tokenizerHelper(UserActionEnum.AUTH);

            await authService.updateAuthTokenByUserId(id, tokens);

            res.json({
                data: tokens
            });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AuthController();
