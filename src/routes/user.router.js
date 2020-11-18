const {Router} = require('express');

const {
    auth: {
        checkAccessTokenMiddleware,
    },
    user: {
        checkIsCreateUserValidMiddleware,
        checkIsUpdateUserValidMiddleware,
        checkIsUserExistsMiddleware
    }
} = require('../middlewares');
const {userController} = require('../controllers');

const router = Router();

router.post('/', checkIsCreateUserValidMiddleware, userController.create);

router.use(checkAccessTokenMiddleware);

router.get('/', userController.getAll);

router.use('/:user_id', checkIsUserExistsMiddleware);

router.get('/:user_id', userController.getById);
router.put('/:user_id', checkIsUpdateUserValidMiddleware, userController.update);
router.delete('/:user_id', userController.delete);

module.exports = router;
