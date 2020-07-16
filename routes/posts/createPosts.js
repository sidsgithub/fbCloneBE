const createPostController = require('../../controllers/postController/createPostController');
const globalResponseHandler = require('../../globalResponseHandler');
/**
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const newUser = async (req, res, next) => {
  try {
    const object = {
      topic: req.body.topic,
      category: req.body.category,
      description: req.body.description,
    };

    const result = await createPostController(object);
    globalResponseHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = newUser;
