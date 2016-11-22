app.controller('lunboCtrl',['$scope',function($scope){
    $scope.imgs=[
        'a.jpg',
        'b.jpg',
        'c.jpg'
    ]
}]);
app.directive('lunbo',[function(){
    return {/
        restrict:"E",
        replace:true,
        templateUrl:'Components/lunbo/lunbo.html',
        scope:{
            pics:'=',
            time:'='
        },
        link:function($scope,el){
        	var t1=$(".jingxuan .banner").width()
        	console.log(t1)
            var t=-500;
            setInterval(function(){
                $('.box_nei').css("transform","translate3d("+t+"px,0,0)");
                t-=500;
                if(t===-){
                    t=0;
                }
            },$scope.time)

            console.log(el)
        }
    }
}]);