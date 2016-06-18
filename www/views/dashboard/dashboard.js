angular.module('starter')
    .controller('DashboardController',function($scope){
         $scope.doReRefresh = function() {
             location.reload();
             $scope.$broadcast('scroll.refreshComplete');
        }
            
})