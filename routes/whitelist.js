const express = require('express');
const router = express.Router();
const Whitelist = require('../controllers/whitelist');
const auth = require('../authMiddleware/auth')

router.post('/whitelist', auth.jwtMiddleware, Whitelist.createWhitelist);

router.get('/whitelist', auth.jwtMiddleware, Whitelist.getWhitelist);

router.delete('/:id', auth.jwtMiddleware, Whitelist.deleteWhitelist);

module.exports = router;