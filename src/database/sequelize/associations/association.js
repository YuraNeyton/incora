const {UserModel, OAuthTokenModel} = require('../models');

module.exports = () => {
    UserModel.hasMany(OAuthTokenModel, {foreignKey: 'user_id', onDelete: 'cascade'});
};
