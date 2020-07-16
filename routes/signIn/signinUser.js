const signinController = require('../../controllers/signInController/signinController');
const globalResponseHandler = require('../../globalResponseHandler');
const logger = require('../../logger');

/**
 * SignIn : Checks for user in the database.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findUser = async (req, res, next) => {
  try {
    logger.info(req.url);

    const object = {
      email: req.body.email,
      password: req.body.password,
    };

    const result = await signinController(object);

    globalResponseHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = findUser;
