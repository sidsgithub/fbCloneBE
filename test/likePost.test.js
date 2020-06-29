const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('PUT /addLike', () => {
  it('should add like to a post.', () => {});
  it('should throw an error if user does not exist.', () => {});
  it('should throw an error if post does not exist.', () => {});
  it('should throw an error if user is not a friend.', () => {});
  it('should throw an error if post is already like by the user.', () => {});
  it('should throw an error when the post is deleted', () => {});
});
