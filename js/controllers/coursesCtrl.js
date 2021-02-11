angular.module("myApp")
.controller("coursesCtrl",function($scope,$rootScope){
    $(document).ready(function(){
        $('#showNav').click(function(){
            $('.navigation').show(500);
            $(this).hide()
        })
    
        $('#hideNav').click(function(){
            $('.navigation').hide(500);
            $('#showNav').show(600)
        })
    })

    $rootScope.programing=[
        {name:"Full Stack Web Devolepment",teacher:"ABDALLAH NOU ALDAIM",img:"../img/programing/1.jpg"},
        {name:"Learn Python",teacher:"AHMED SPURS",img:"../img/programing/2.jpg"},
        {name:"LEARN C++ FROM SCRATCH",teacher:"IBN HAIDER",img:"../img/programing/3.jpg"},
        {name:"Syber Security",teacher:"AL-NASHIF",img:"../img/programing/4.png"},
        {name:"LEARN C++ FROM SCRATCH",teacher:"IBN HAIDER",img:"../img/programing/1.jpg"},
        {name:"Syber Security",teacher:"AL-NASHIF",img:"../img/programing/2.jpg"},
    ]

    $rootScope.programs = function(most){
        $rootScope.pname = most.name
        $rootScope.pteacher = most.teacher
        $rootScope.pimg = most.img
    }
 
})