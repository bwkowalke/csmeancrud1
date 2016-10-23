'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var siteDefinitionCtrlStub = {
  index: 'siteDefinitionCtrl.index',
  show: 'siteDefinitionCtrl.show',
  create: 'siteDefinitionCtrl.create',
  update: 'siteDefinitionCtrl.update',
  destroy: 'siteDefinitionCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var siteDefinitionIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './siteDefinition.controller': siteDefinitionCtrlStub
});

describe('SiteDefinition API Router:', function() {

  it('should return an express router instance', function() {
    siteDefinitionIndex.should.equal(routerStub);
  });

  describe('GET /api/siteDefinitions', function() {

    it('should route to siteDefinition.controller.index', function() {
      routerStub.get
        .withArgs('/', 'siteDefinitionCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/siteDefinitions/:id', function() {

    it('should route to siteDefinition.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'siteDefinitionCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/siteDefinitions', function() {

    it('should route to siteDefinition.controller.create', function() {
      routerStub.post
        .withArgs('/', 'siteDefinitionCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/siteDefinitions/:id', function() {

    it('should route to siteDefinition.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'siteDefinitionCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/siteDefinitions/:id', function() {

    it('should route to siteDefinition.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'siteDefinitionCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/siteDefinitions/:id', function() {

    it('should route to siteDefinition.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'siteDefinitionCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
