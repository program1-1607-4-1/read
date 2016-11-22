app.controller('lunboCtrl',['$scope',function($scope){
    $scope.imgs=[
        'a.jpg',
        'b.jpg',
        'c.jpg'
    ]
}]);
app.directive('lunbo',[function(){
    return {
        restrict:"E",
        replace:true,
        templateUrl:'Components/lunbo/lunbo.html',
        scope:{
            pics:'=',
            time:'='
        },
        link:function($scope,el){
        	var n=0;
        	var next=0;
            setInterval(function(){
              next=n+1;
              if(next>=3){
					next=0;
				}
                $('.banner-pic').eq(n).animate({opacity:0},600).end().eq(next).animate({opacity:1},600)
			  n=next;
            },$scope.time)
            console.log(el)
        }
    }
}]);