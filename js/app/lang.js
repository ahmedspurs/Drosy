angular.module("myApp")
.controller("appCtrl",function($scope,$rootScope){
    $rootScope.navbar=[
        {
            home:"STORE",store:"STORE",contact:"CONTACT US"
        },
        {
            home:"الرئيسية",store:"المتجر",contact:"تواصل معنا"
        }
    ]
    $rootScope.langInd = 0
})