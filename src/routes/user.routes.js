const express = require('express');
const { signUp, login, verify } = require('../controller/user.controllers');
const router = express.Router();


router.post('/signup', signUp)
router.post('/login', login)
router.put('/verify', verify)

module.exports = router