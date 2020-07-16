const router = require('express').Router();

const createPost = require('./createPosts');
// const Validation = require('../../validationMiddleware/Validation');

router.post('/create', createPost);

module.exports = router;
