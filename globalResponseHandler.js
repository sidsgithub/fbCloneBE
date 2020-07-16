const handleResponse = (result, req, res, next) => {
  try {
    if (result.message === 'success') {
      return res.status(200).json(result);
    }
    return res.status(400).json(result);
  } catch (error) {
    next(error);
  }
  return null;
};

module.exports = handleResponse;
