angular.module('starter')
    .controller('RegisterController',[function(){
        var self = this;
        self.goBack = function(){
            history.go(-1)
        }
}])

