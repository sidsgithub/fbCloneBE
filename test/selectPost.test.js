const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('GET /selectPost', () => {
  it('should select a post', () => {});
  it('should throw an error if post is not present.', async () => {});
  it('should throw an error when a user is not present', () => {});
  it('shoudl throw an error if a post is deleted', () => {});
});
