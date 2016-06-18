angular.module('starter')
    .controller('HomeController',['$ionicPopup','$location','LoginService',function($ionicPopup, $location,LoginService){
            var self = this;
            //create user credentials
            var user = {
                username:"user",
                password:"user"
            }
            self.test = function(){
                alert(self.user.username);
            }
            self.login = function(){
                if(self.user.username != user.username || self.user.password != user.password){
                    $ionicPopup.alert({
                        title: 'Login Error',
                        template: 'Incorrect username or password'
                  });
                }else{
                    //alert('Logged In!');
                    LoginService.authenticate();
                    //alert(LoginService.isAuthenticated())
                    $location.path('/dashboard')
                }
            }
    
}])


