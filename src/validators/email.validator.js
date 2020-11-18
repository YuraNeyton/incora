const Joi = require('joi');

const {
    regExps: {
        emailRegExp
    }
} = require('../constants');

module.exports = Joi.string().regex(emailRegExp).trim().required();
