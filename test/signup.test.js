const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const { expect } = chai;
chai.use(chaiHttp);

describe('POST /signup', () => {
  it('should create a user', (done) => {
    chai
      .request(app)
      .post('/signup')
      .send({
        name: 'siddharth',
        email: 'sid1@gmail.com',
        password: 'sid',
        date: '1/1/1',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message').to.equal('success');
        done();
      });
  });
  it('should throw an error if email is invalid', async () => {
    const response = await chai.request(app).post('/signup').send({
      email: undefined,
      password: 'sid@123',
    });
    expect(response).to.have.status(400);
    expect(response.body).to.have.property('message');
  });
  it('should throw an error if password is invalid', async () => {
    const response = await chai.request(app).post('/signup').send({
      email: 'hello@gmail.com',
      password: undefined,
    });
    expect(response).to.have.status(400);
    expect(response.body).to.have.property('message');
  });
  it('should throw an error if email already exists', async () => {
    const response = await chai.request(app).post('/signup').send({
      email: 'sid1@gmail.com',
      password: 'password',
    });
    expect(response).to.have.status(400);
    expect(response.body).to.have.property('message');
  });
});
