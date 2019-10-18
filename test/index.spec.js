import app from '../src/index'
import chai from 'chai'
import chaiHttp from 'chai-http'
import {
  expect
} from "chai"
import testFunction from "../src/index"

chai.use(chaiHttp);
chai.should();

describe('Addresses', () => {

  describe('GET', () => {
    // TODO: Find out exactly how done behaves
    it('should return a 200', (done) => {
      chai.request(app)
        .get('/addresses')
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          done();
        });
    });
  });
})
