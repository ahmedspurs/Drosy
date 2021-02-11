angular.module("myApp")
.controller("courseCtrl",function($rootScope,$scope){
    $scope.comment=[
        {name:"al-nashif",comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit debitis adipisci aut pariatur eum quos",
        img:"../img/users/1.jpg"
    },
       {name:"Ibn Haider",comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit debitis adipisci aut pariatur eum quos",
        img:"../img/users/2.jpg"
    },
       {name:"Mohamed Ali",comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit debitis adipisci aut pariatur eum quos",
        img:"../img/users/3.jpg"
    },
       {name:"Hamdock",comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit debitis adipisci aut pariatur eum quos",
        img:"../img/users/1.jpg"
    }
    ]
    $rootScope.addCom=function(name,com){
        $scope.name=name
        $scope.com=com

        $scope.commentAdd = {name:$scope.name,comment:$scope.com,img:"../img/users/2.jpg"}

        $scope.comment.push($scope.commentAdd)

        $scope.name=""
        $scope.com=""
    }
})