const jsonwebtoken = require('jsonwebtoken');

const {globalConfig} = require('../../configs');
const {
    enums: {
        responseStatusCode: {
            ResponseStatusCodeEnum
        },
        user: {
            UserActionEnum
        }
    },
} = require('../../constants');
const {ErrorHandler} = require('../../errors');

module.exports = method => {
    switch (method) {
        case UserActionEnum.AUTH:
            const access_token = jsonwebtoken.sign({},
                globalConfig.JWT_SECRET,
                {expiresIn: globalConfig.ACCESS_TOKEN_LIFETIME}
            );
            const refresh_token = jsonwebtoken.sign({},
                globalConfig.JWT_REFRESH_SECRET,
                {expiresIn: globalConfig.REFRESH_TOKEN_LIFETIME}
            );

            return {access_token, refresh_token};

        default:
            throw new ErrorHandler(ResponseStatusCodeEnum.SERVER_ERROR, 'Wrong action type');
    }
};
