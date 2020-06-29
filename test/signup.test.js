const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('POST /createusers', () => {
  it('should create a user', async () => {});
  it('should throw an error if email is invalid', async () => {});
  it('should throw an error if password is invalid', async () => {});
  it('should throw an error if email already exists', async () => {});
});
