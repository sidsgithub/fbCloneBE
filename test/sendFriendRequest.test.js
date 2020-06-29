const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
// sending a friend request involves userId1, userId2 and the status code.

describe('PUT /sendRequest', () => {
  it('should send a friend request', () => {});
  it('should throw an error when friend request is already sent and status code is pending.', () => {});
  it('should throw an error if user is already a friend', () => {});
  it('should throw an error if user does not exist', () => {});
});
