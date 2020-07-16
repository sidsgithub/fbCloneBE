const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const models = require('../../models');
const logger = require('../../logger');

/**
 * SignIn : Checks for user in the database.
 * @param {Object} signInObject - contains email and password of requested user.
 */
const findUserController = async (signInObject) => {
  try {
    const user = await models.User.findOne({
      where: { email: signInObject.email },
    });

    if (user) {
      const token = jwt.sign(user.id, process.env.JWT_SECRET);
      const hash = user.password;

      const result = await bcrypt.compare(signInObject.password, hash);

      if (result) {
        return {
          message: 'success',
          token,
        };
      }
      const msg = 'password did not match.';
      logger.warn('message : ', msg);
      return {
        message: msg,
      };
    }
    const msg = 'user does not exist.';
    logger.warn('message : ', msg);
    return {
      message: msg,
    };
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = findUserController;
