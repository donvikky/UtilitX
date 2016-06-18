// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'HomeController',
            templateUrl: 'views/home/home.html'
        })
        .state('register', {
            url: '/register',
            //controller: 'RegisterController',
            templateUrl: 'views/register/register.html'
        })
        .state('forget', {
            url: '/forget',
            //controller: 'ForgetController',
            templateUrl: 'views/forget/forget.html'
        })
        .state('faq', {
            url: '/faq',
            controller: 'FaqController',
            templateUrl: 'views/faq/faq.html'
        })
        .state('dashboard', {
            url: '/dashboard',
            //controller: 'DashboardController',
            templateUrl: 'views/dashboard/dashboard.html'
        })
        .state('purchase', {
            url: '/purchase',
            controller: 'PurchaseController',
            templateUrl: 'views/purchase/purchase.html'
        })
        .state('summary', {
            url: '/summary',
            controller: 'SummaryController',
            templateUrl: 'views/summary/summary.html'
        })
        .state('payment', {
            url: '/payment',
            controller: 'PaymentController',
            templateUrl: 'views/payment/payment.html'
        })
        .state('transactions', {
            url: '/transactions',
            controller: 'TransactionsController',
            templateUrl: 'views/transactions/transactions.html'
        });
        
$urlRouterProvider.otherwise('/home');
})

.factory('LoginService',[function(){
        var authenticated = "no";

        return{
            isAuthenticated:function(){
                return authenticated;
            },
            authenticate:function(){
                authenticated = "yes";
            }
        }
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
