angular.module('MyApp.controller', []).controller('AppCtrl', function($scope) {
  $scope.clickHandler = function() {
    window.alert('Clicked!');
  };
});
