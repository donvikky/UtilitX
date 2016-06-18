angular.module('starter')
    .controller('PurchaseController',function($scope, $location){
        $scope.purchase = function(){
            $location.path('/summary')
        }
})