angular.module("myApp")
.controller("homeCtrl",function($scope,$rootScope){
    $rootScope.ev = function(event){
        event.preventDefault()
    }
})