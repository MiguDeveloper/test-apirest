const request = require('supertest');
const app = require('../src/app');

// testing endpoint api/users
describe('test Api Users', () => {
  it("getUsers /api/users se espera {isSuccess: true, message: 'get users success'}", (done) => {
    request(app)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200, done);
  });

  it('getUserById /api/users/:id espera un user', (done) => {
    request(app)
      .get('/api/users/U0001')
      .set('Accept', 'Application/json')
      .expect('Content-type', /json/)
      .expect(200, done);
  });

  it('getUserById: respond with json {isSuccess: true, message: "get user by id success"}', (done) => {
    const objResp = { isSuccess: true, message: 'get user by id success' };
    request(app)
      .get('/api/users/U0001')
      .set('Accept', 'Application/json')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(objResp)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('getUserById: respond with json {isSuccess: false, message: "user not found"}', (done) => {
    const objResp = { isSuccess: false, message: 'user not found' };
    request(app)
      .get('/api/users/notexistinguser')
      .set('Accept', 'Application/json')
      .expect('Content-type', /json/)
      .expect(404)
      .expect(objResp)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('postUser: return ok user created', (done) => {
    const user = { username: 'miguelChinchay', password: '123456' };
    const objResp = { isSuccess: true, message: 'user created successfully' };

    request(app)
      .post('/api/users')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, objResp)
      .end((err) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it('PostUser: return fail created user', (done) => {
    const user = {};
    const objResp = {
      isSuccess: false,
      message: 'user not created',
    };

    request(app)
      .post('/api/users')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, objResp)
      .end((err) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
