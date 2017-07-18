const request = require('supertest');
const should = require('should');
const app = require('./index');

describe('Get /users는', ()=> {
    describe('성공시', ()=>{
        it('유제 객체를 담은 배열로 응답한 ', (done)=>{
        request(app)
            .get('/users')
            .end((err, res) => {
                res.body.should.be.instanceOf(Array);
                done();
            })
        })
    })
    
})
