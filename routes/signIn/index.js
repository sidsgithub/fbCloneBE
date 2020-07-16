const router = require('express').Router();

const signinUser = require('./signinUser');
const signInValidation = require('../../validationMiddleware/signinValidation');

router.put('/', signInValidation, signinUser);

module.exports = router;
