'use strict';

describe('Directive: submitUpload', function () {

  // load the directive's module
  beforeEach(module('cgeUploaderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<submit-upload></submit-upload>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the submitUpload directive');
  }));
});
