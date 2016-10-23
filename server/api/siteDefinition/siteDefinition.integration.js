'use strict';

var app = require('../..');
import request from 'supertest';

var newSiteDefinition;

describe('SiteDefinition API:', function() {

  describe('GET /api/siteDefinitions', function() {
    var siteDefinitions;

    beforeEach(function(done) {
      request(app)
        .get('/api/siteDefinitions')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          siteDefinitions = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      siteDefinitions.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/siteDefinitions', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/siteDefinitions')
        .send({
          name: 'New SiteDefinition',
          info: 'This is the brand new siteDefinition!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSiteDefinition = res.body;
          done();
        });
    });

    it('should respond with the newly created siteDefinition', function() {
      newSiteDefinition.name.should.equal('New SiteDefinition');
      newSiteDefinition.info.should.equal('This is the brand new siteDefinition!!!');
    });

  });

  describe('GET /api/siteDefinitions/:id', function() {
    var siteDefinition;

    beforeEach(function(done) {
      request(app)
        .get('/api/siteDefinitions/' + newSiteDefinition._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          siteDefinition = res.body;
          done();
        });
    });

    afterEach(function() {
      siteDefinition = {};
    });

    it('should respond with the requested siteDefinition', function() {
      siteDefinition.name.should.equal('New SiteDefinition');
      siteDefinition.info.should.equal('This is the brand new siteDefinition!!!');
    });

  });

  describe('PUT /api/siteDefinitions/:id', function() {
    var updatedSiteDefinition;

    beforeEach(function(done) {
      request(app)
        .put('/api/siteDefinitions/' + newSiteDefinition._id)
        .send({
          name: 'Updated SiteDefinition',
          info: 'This is the updated siteDefinition!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSiteDefinition = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSiteDefinition = {};
    });

    it('should respond with the updated siteDefinition', function() {
      updatedSiteDefinition.name.should.equal('Updated SiteDefinition');
      updatedSiteDefinition.info.should.equal('This is the updated siteDefinition!!!');
    });

  });

  describe('DELETE /api/siteDefinitions/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/siteDefinitions/' + newSiteDefinition._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when siteDefinition does not exist', function(done) {
      request(app)
        .delete('/api/siteDefinitions/' + newSiteDefinition._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
