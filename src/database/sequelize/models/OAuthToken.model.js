const {DataTypes, Model} = require('sequelize');

const {
    sequelizeConfig: {
        sequelize
    }
} = require('../../../configs');

class OAuthTokenModel extends Model {
}

OAuthTokenModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    access_token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'oAuthToken'
});

module.exports = OAuthTokenModel;

