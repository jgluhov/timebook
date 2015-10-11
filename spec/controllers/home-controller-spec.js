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
      }, 100);

      expect(timerCallback).not.toHaveBeenCalled();

      jasmine.clock().tick(101);

      expect(timerCallback).toHaveBeenCalled();
    });

    it("causes an interval to be called synchronously", function() {
      setInterval(function() {
        timerCallback();
      }, 100);

      expect(timerCallback).not.toHaveBeenCalled();

      jasmine.clock().tick(101);
      expect(timerCallback.calls.count()).toEqual(1);

      jasmine.clock().tick(50);
      expect(timerCallback.calls.count()).toEqual(1);

      jasmine.clock().tick(50);
      expect(timerCallback.calls.count()).toEqual(2);
    });

});