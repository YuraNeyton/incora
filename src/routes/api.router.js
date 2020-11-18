const {Router} = require('express');

const {
    userRouter,
    authRouter,
} = require('../routes');

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);

module.exports = router;
