angular.module('starter')
    .controller('ForgetController',[function(){
        var self = this;
        self.goBack = function(){
            history.go(-1)
        }
}])