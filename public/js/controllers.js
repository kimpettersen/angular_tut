'use strict';

/* Controllers */
function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!';
  });
}

function PhoneListCtrl($scope, $http) {
  $http.get('/api/phones').success(function(data) {
    $scope.phones = data;
    // $scope.phones = data.splice(0, 5);
  });

  $scope.title = "This is a lot of stuff..";

  $scope.orderProp = 'age';

}

function MyCtrl2() {
}
MyCtrl2.$inject = [];
