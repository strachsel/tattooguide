myApp.controller('ContentCtrl', function($scope, $http) {

  $scope.details = {
    showing: false,
  };

  $scope.showDetails = function (){
    $scope.details.showing = true;
  }
  $scope.resetSearch = function (){
    $scope.details.showing = false;
  }

  $http.get('../public/js/data.json')
  .success(function(response){
    $scope.tattoos = response.records;
  });

});
