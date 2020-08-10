const request = require('supertest')
const app = require('../app')

describe('Test Express', () => {
  test('GET', (done) => {
    request(app)
      .get('/')
      .then((res) => {
        expect(res.statusCode).toBe(200)
        done()
      })
  })
})
