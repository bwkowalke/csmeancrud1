'use strict';

describe('Component: SiteDefinitionComponent', function () {

  // load the controller's module
  beforeEach(module('csmeancrudApp'));

  var SiteDefinitionComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SiteDefinitionComponent = $componentController('siteDefinition', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
