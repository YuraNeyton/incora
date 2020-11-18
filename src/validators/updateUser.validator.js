const Joi = require('joi');

const {
    regExps: {
        emailRegExp,
        onlyLettersRegExp,
        phoneRegExp
    }
} = require('../constants');

module.exports = Joi.object({
    first_name: Joi.string().regex(onlyLettersRegExp).trim(),
    last_name: Joi.string().regex(onlyLettersRegExp).trim(),
    email: Joi.string().regex(emailRegExp).trim(),
    phone: Joi.string().regex(phoneRegExp).trim(),
    password: Joi.string().trim()
});
