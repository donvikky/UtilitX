angular.module('starter')
    .controller('FaqController',function($scope, $ionicHistory){
         $scope.goBack = function() {
                //$ionicHistory.goBack();
                history.go(-1);
            };
})