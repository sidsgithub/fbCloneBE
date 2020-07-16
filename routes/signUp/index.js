const router = require('express').Router();

const createUser = require('./createUser');
const signUpValidation = require('../../validationMiddleware/signUpValidation');

router.post('/signup', signUpValidation, createUser);

module.exports = router;
