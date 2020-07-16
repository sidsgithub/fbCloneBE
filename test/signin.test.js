const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const { expect } = chai;

chai.use(chaiHttp);

describe('PUT /signin', () => {
  it('should sign in a user', () => {
    chai
      .request(app)
      .put('/signin')
      .send({
        email: 'sid@gmail.com',
        password: 'sid',
      })
      .end((err, res) => {
        expect(res.body).to.have.property('token');
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message').to.equal('success');
        done();
      });
  });
  it('should throw an error if email is invalid', async () => {
    const response = await chai.request(app).put('/signin').send({
      email: undefined,
      password: 'sid@123',
    });
    expect(response).to.have.status(400);
    expect(response.body).to.have.property('message');
  });
  it('should throw an error if password is invalid', async () => {
    const response = await chai.request(app).put('/signin').send({
      email: 'sid@gmail.com',
      password: undefined,
    });
    expect(response).to.have.status(400);
    expect(response.body).to.have.property('message');
  });
  it('should throw an error if user not found', async () => {});
  it('should throw an error if password does not match', async () => {});
});
