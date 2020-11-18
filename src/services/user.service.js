const {
    models: {
        UserModel,
        OAuthTokenModel
    }
} = require('../database');

class UserService {

    create(user) {
        return UserModel.create(user);
    }

    update(id, fieldsForUpdate) {
        return UserModel.update(fieldsForUpdate, {where: {id}})
    }

    delete(id) {
        return UserModel.destroy({
            where: {id}
        })
    }

    getAll() {
        return UserModel.findAndCountAll()
    }

    getById(id) {
        return UserModel.findOne({
            where: {id}
        })
    }

    getByAccessToken(access_token) {
        return UserModel.findOne({
            include: {
                model: OAuthTokenModel,
                required: true,
                where: {
                    access_token
                }
            }
        });
    }

    getByRefreshToken(refresh_token) {
        return UserModel.findOne({
            include: {
                model: OAuthTokenModel,
                required: true,
                where: {
                    refresh_token
                }
            }
        });
    }

    getByEmail(email) {
        return UserModel.findOne({
            where: {email}
        });
    }
}

module.exports = new UserService();
