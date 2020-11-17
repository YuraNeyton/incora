const {Sequelize} = require('sequelize');

const globalConfig = require('./global.config');


module.exports.sequelize = new Sequelize(
    globalConfig.DATABASE_NAME,
    globalConfig.DATABASE_USER,
    globalConfig.DATABASE_PASSWORD,
    {
        dialect: globalConfig.DATABASE_DIALECT,
        host: globalConfig.DATABASE_HOST
    }
);

module.exports.syncOptions = {
    alter: false
};
