const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:3349');

console.log(server);

describe("TEMPO API unit test", function(){
    it("Should return home endpoint", function (done){
        server
        .get("/")
        .expect("Content-type", /json/)
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200);
            res.error.should.equal(false);
            done();
        });
    });

    it("Should return test-api endpoint", function (done){
        server
            .get("/test-api")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                res.error.should.equal(false);
                done();
            });
    });

    it("Should return 404", function (done){
        server
            .get("/any")
            .expect(400)
            .end(function(err,res){
                // console.log(res);
                res.status.should.equal(404);
                done();
            });
    });

});