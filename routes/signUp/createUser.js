const createUserController = require('../../controllers/signUpController/signUpController');
const globalResponseHandler = require('../../globalResponseHandler');
/**
 * SignUp : creates a user .
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const newUser = async (req, res, next) => {
  try {
    const object = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      date: req.body.date,
    };

    const result = await createUserController(object);
    globalResponseHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = newUser;
