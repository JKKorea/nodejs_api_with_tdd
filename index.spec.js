const app = require('./index');
const request = require('supertest');

describe('Get /users는', ()=> {
    it('...', (done)=>{
        request(app)
            .get('/users')
            .end((err, res) => {
                console.log(res.body);
                done();
            })
    })
})
