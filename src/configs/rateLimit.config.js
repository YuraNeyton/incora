const {
    enums: {
        rateLimit: {
            RateLimitEnum
        }
    }
} = require('../constants');

module.exports = {
    windowMs: RateLimitEnum.MINUTES * RateLimitEnum.SECONDS * RateLimitEnum.MILLISECONDS,
    max: 1000
};
