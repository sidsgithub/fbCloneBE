const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('POST /addComment', () => {
  it('should add a comment to a post', () => {});
  it('should throw an error when post does not exist', () => {});
  it('should throw an error when user is not a friend', () => {});
  it('should throw an error when comment is empty', () => {});
});
