var mocha = require('mocha')
var request = require('supertest')
var assert = require('assert')
var app = require('../app')

describe('Test REST API', function(){
  describe('GET /', function(){
	it('should return json with key "message" and value "hello"', function(done){
	  request(app).get('/')
	  .set('Accept', 'application/json')
	  .expect('Content-Type', /json/)
	  .expect(200)
	  .expect(function(res){
	  	assert.equal(res.body.message, 'hello')
	  })
      .end(function(err, res){
      	if(err) return done(err)
      	done()
      })
	})
  })
})
