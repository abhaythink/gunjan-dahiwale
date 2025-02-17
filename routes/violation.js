const express = require('express');
const   router = express.Router();
const Violation = require('../controllers/violation');
const auth = require('../authMiddleware/auth')

router.post('/', auth.jwtMiddleware, Violation.createViolation);

router.get('/', auth.jwtMiddleware, Violation.getViolation);

router.post('/support', auth.jwtMiddleware, Violation.CreateSupport);

module.exports = router;