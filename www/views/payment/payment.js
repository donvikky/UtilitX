angular.module('starter')
    .controller('PaymentController',function($scope, $ionicPopup, $location){
        $scope.doPayment = function() {
        $ionicPopup.alert({
            title: 'Payment Success',
            template: 'Your payment is successful. Your token is 23456-12344-1234-234455'
        });
        $location.path('/dashboard');
    }
})