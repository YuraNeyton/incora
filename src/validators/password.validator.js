const Joi = require('joi');

module.exports = Joi.string().min(8).max(20).trim().required();
