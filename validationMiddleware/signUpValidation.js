const Joi = require('joi');

const signUpValidation = async (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(3).max(30).required(),
      date: Joi.string(),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }
};

module.exports = signUpValidation;
