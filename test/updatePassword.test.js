const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('PUT /updatepassword', () => {
  it('should update a users password ', () => {});
  it('should throw an error if email is invalid', () => {});
  it('should throw an error if password is invalid', () => {});
  it('should throw an error if password does not match', () => {});
  it('should throw an error if new password is same as the old one', () => {});
});
