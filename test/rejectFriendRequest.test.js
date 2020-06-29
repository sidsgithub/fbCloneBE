const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
// rejecting a friend request involves userId1, userId2 and the status code.

describe('PUT /rejectRequest', () => {
  it('should reject a friend request', () => {});
  it('should throw an error when friend request is cancelled.', () => {});
  it('should throw an error if user is already a friend', () => {});
  it('should throw an error if user does not exist', () => {});
});
