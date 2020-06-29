const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('DELEE /deletePost', () => {
  it('should delete a Post', () => {});
  it('shoud thorow an error when post does not exist', () => {});
  it('should throw an error when user does not exist', () => {});
  // in case of soft deleting the post.
  it('should throw an error when post is already deleted', () => {});
});
