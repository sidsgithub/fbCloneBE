const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('PUT /loginusers', () => {
  it('should sign in a user', () => {});
  it('should throw an error if email is invalid', async () => {});
  it('should throw an error if password is invalid', async () => {});
  it('should throw an error if user not found', async () => {});
  it('should throw an error if password does not match', async () => {});
});
