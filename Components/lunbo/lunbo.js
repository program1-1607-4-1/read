var app=angular.module("lunbo",[]);
app.controller('lunboCtrl',['$scope',function($scope){
    $scope.imgs=[
        'top1.png',
        'top2.png',
        'top3.png'
    ]
}]);
app.directive('lunbo',[function(){
    return {
        restrict:"E",
        replace:true,
        templateUrl:'lunbo.html',
        scope:{
            pics:'=',
            time:'='
        },
        link:function($scope,el){
            var t=-500;
            setInterval(function(){
                $('.chang').css("transform","translate3d("+t+"px,0,0)");
                t-=500;
                if(t===-1500){
                    t=0;
                }
            },$scope.time)

            console.log(el)
        }
    }
}]);