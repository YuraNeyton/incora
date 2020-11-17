const {DataTypes, Model} = require('sequelize');

const {
    sequelizeConfig: {
        sequelize
    }
} = require('../../../configs');
const {
    hashers: {
        HASH_PASSWORD_SYNC
    }
} = require('../../../helpers');

class UserModel extends Model {
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: true
    },
    last_name: {
        type: DataTypes.STRING,
        isAlpha: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    phone: DataTypes.STRING,
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
        set(password) {
            this.setDataValue('password', HASH_PASSWORD_SYNC(password));
        }
    },
}, {
    sequelize,
    tableName: 'user'
});

module.exports = UserModel;
