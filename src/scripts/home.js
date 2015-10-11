'use strict';

angular.module('TimebookApp', [])
  .controller('HomeController', [
    '$scope', 'homeService', function ($scope, homeService) {
      $scope.amount = null;

      setInterval((function () {
        $scope.$apply(function () {
          homeService.getAmount()
            .success(function (res) {
              $scope.amount = res;
            });
        });
      }), 1000);

    }])
  .service('homeService', [
    '$http', function ($http) {
      this.getAmount = function () {
        return $http.get('/amount');
      };
    }
  ]);
