const {Router} = require('express');

const {
    auth: {
        checkAccessTokenMiddleware,
        checkIsPasswordCorrectMiddleware,
        checkIsUserRegisteredMiddleware,
        checkRefreshTokenMiddleware
    }
} = require('../middlewares');
const {authController} = require('../controllers');

const router = Router();

router.post('/', checkIsUserRegisteredMiddleware, checkIsPasswordCorrectMiddleware, authController.login);
router.post('/logout', checkAccessTokenMiddleware, authController.logout);
router.post('/refresh', checkRefreshTokenMiddleware, authController.refreshToken);

module.exports = router;
