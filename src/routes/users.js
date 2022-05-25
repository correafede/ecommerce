var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

const uploadUFile = require('../middlewares/multerUMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const loginCheck = require('../middlewares/validateLoginMiddleware')
const registerCheck = require('../middlewares/validateRegisterMiddleware')
const guestMiddleware = require('../middlewares/guestMIddleware') 

router.get('/login', guestMiddleware, userController.login);
router.get('/login2', guestMiddleware, userController.login2);
router.post('/login', loginCheck, userController.processLogin);

router.get('/register', guestMiddleware, userController.register);
router.post('/register', registerCheck, userController.processRegister);

router.get('/profile', authMiddleware, userController.profile);

router.get('/logout', userController.logout);

module.exports = router;