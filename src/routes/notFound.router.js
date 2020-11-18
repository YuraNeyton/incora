const {Router} = require('express');

const {notFoundController} = require('../controllers');

const router = Router();

router.all('*', notFoundController.all);

module.exports = router;
