const express = require('express');
const router = express.Router();
const user = require('../controllers/auth')

router.post('/', user.signup);

router.post('/login', user.login);

module.exports = router;