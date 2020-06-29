const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
// accepting a friend request involves userId1, userId2 and the status code.

describe('PUT /acceptRequest', () => {
  it('should accept a friend request.', () => {});
  it('should throw an error if user does not exist.', () => {});
  it('should throw an error if user is already a friend.', () => {});
  it('should throw an error if user cancelled the request.', () => {});
});
