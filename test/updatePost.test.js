const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('PUT /updatePost', () => {
  it('should update a Post', () => {});
  it('shoud thorow an error when post does not exist', () => {});
  it('should throw an error when user does not exist', () => {});
  it('should throw an error when topic is left blank', () => {});
  it('should throw an error when category is left blank', () => {});
  it('should throw an error when description is left blank', () => {});
});
