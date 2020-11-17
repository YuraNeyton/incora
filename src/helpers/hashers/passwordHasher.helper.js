const {compare, hash, hashSync} = require('bcrypt');

module.exports.HASH_PASSWORD = (password) => hash(password, 10);
module.exports.HASH_PASSWORD_SYNC = (password) => hashSync(password, 10);
module.exports.CHECK_HASH = (password, hashedPass) => compare(password, hashedPass);
