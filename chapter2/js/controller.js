angular.module('MyApp.controller', []).controller('AppCtrl', function($scope) {
  $scope.clickHandler = function() {
    $scope.isHidden = !$scope.isHidden;
  };

  $scope.contacts = [
    {
      name: 'John Doe',
      phone: '01234567890',
      email: 'john.doe@example.com'
    },
    {
      name: 'Karen Brownwich',
      phone: '09876543210',
      email: 'karen@example.com'
    }
  ];
});
