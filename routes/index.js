const express = require('express');

const router = express.Router();

const signUp = require('./signUp/index');

router.use('/', signUp);

module.exports = router;
