describe('Controller: HomeController', function() {
  'use strict';

  var HomeController, scope;

  beforeEach(module('TimebookApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeController = $controller('HomeController', {$scope: scope});
  }));

  it('should instantiate amount to null', function () {
    expect(scope.amount).toBeNull();
  });
});

describe("Interval: HomeController", function() {
    var timerCallback;

    beforeEach(function() {
      timerCallback = jasmine.createSpy('timerCallback');
      jasmine.clock().install();
    });

    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it("causes a interval to be called synchronously", function() {
      setInterval(function() {
        timerCallback();
      }, 1000);

      expect(timerCallback).not.toHaveBeenCalled();

      jasmine.clock().tick(1001);

      expect(timerCallback).toHaveBeenCalled();
    });
});
