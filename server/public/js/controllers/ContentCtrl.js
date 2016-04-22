myApp.controller('ContentCtrl', function($scope, $http) {

  $http.get('../public/js/data.json')
  .success(function(response){
    $scope.tattoos = response.records;
  });
});
