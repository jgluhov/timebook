'use strict';

describe('Service: homeService', function () {
  var homeService, httpBackend;

  beforeEach(function () {
    module('TimebookApp');

    inject(function ($httpBackend, _homeService_) {
      homeService = _homeService_;
      httpBackend = $httpBackend;
    });
  });

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should have getAmount function', function() {
    expect(angular.isFunction(homeService.getAmount)).toBe(true);
  });

  it('should send the request to the server and return an amount number.', function () {
    var amount = Math.floor(Math.random());
    httpBackend.expectGET('/amount').respond(200, amount);

    var returnedPromise = homeService.getAmount();

    var result;
    returnedPromise.then(function (response) {
      result = response.data;
    });

    httpBackend.flush();

    expect(result).toEqual(amount)
  });

  it('should get data from the server and set it to amount',
    inject(function ($rootScope, $controller) {
      var amount = Math.floor(Math.random());
      httpBackend.expectGET('/amount').respond(200, amount);

      var $scope = $rootScope.$new(),
        homeCtrl = $controller('HomeController', {$scope: $scope});


      homeService.getAmount()
        .then(function(res) {
          $scope.amount = res.data;
        });

      expect($scope.amount).toBeNull();

      httpBackend.flush();

      expect($scope.amount).toEqual(amount);

      $rootScope.$digest();
    }));

  it('should compile angular expressions', inject(function($rootScope, $compile) {
    var $scope = $rootScope.$new();

    $rootScope.amount = 4;

    var expression = '<p> 2 + 2 == {{ amount }}</p>';
    var element = $compile(expression)($rootScope);

    expect(element.html()).not.toContain('2 + 2 == 4');

    $rootScope.$digest();

    expect(element.html()).toContain('2 + 2 == 4');
  }))
});
