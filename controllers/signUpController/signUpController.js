const bcrypt = require('bcrypt');

const models = require('../../models');

const saltRounds = 10;

/**
 * SignUp : creates a user .
 * @param {Object} signUpObject - contains name, email, password of the requested user.
 */

const newUser = async (signUpObject) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashed = bcrypt.hashSync(signUpObject.password, salt);

  const toPersist = {
    Name: signUpObject.name,
    Email: signUpObject.email,
    Password: hashed,
    resetPasswordDate: signUpObject.date,
  };
  const user = await models.User.create(toPersist);

  return {
    message: 'success',
    user,
  };
};

module.exports = newUser;
