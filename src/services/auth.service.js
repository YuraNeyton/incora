const {
    models: {
        OAuthTokenModel
    }
} = require('../database');

class AuthService {

    createAuthToken(token) {
        return OAuthTokenModel.create(token);
    }

    deleteAuthTokenByAccessToken(access_token) {
        return OAuthTokenModel.destroy({
            where: {access_token}
        });

    }

    deleteAuthTokenByRefreshToken(refresh_token) {
        return OAuthTokenModel.destroy({
            where: {refresh_token}
        });

    }

    updateAuthTokenByUserId(user_id, tokens) {
        return OAuthTokenModel.update(tokens, {
            where: {user_id}
        });
    }
}

module.exports = new AuthService();
