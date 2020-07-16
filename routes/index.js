const express = require('express');

const router = express.Router();

const signUp = require('./signUp/index');
const signIn = require('./signIn/index');
const posts = require('./posts/index');

router.use('/', signUp);
router.use('/signin', signIn);
router.use('/posts', posts);

module.exports = router;
