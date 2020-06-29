const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('GET /listPost', () => {
  it('should list all posts of a specific user and his friends', () => {});
  it('shoud thorow an error when user does not exist', () => {});
  it('should throw an error when user has no posts', () => {});
  it('should throw an error when friends has no posts', () => {});
  // in case of soft deleting the post.
  it('should throw an error when post is already deleted', () => {});
});
