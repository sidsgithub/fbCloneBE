const models = require('../../models');

/**
 * @param {Object} postObject - contains topic, ctegory, description of the requested post.
 */

const newPost = async (postObject) => {
  const toPersist = {
    topic: postObject.topic,
    category: postObject.category,
    description: postObject.description,
  };
  const post = await models.Post.create(toPersist);

  return {
    message: 'success',
    post,
  };
};

module.exports = newPost;
