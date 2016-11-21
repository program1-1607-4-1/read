//$(function(){
//	$('.gengxin').on('touchend',function(){
//		$('.box').addClass('xian');
//	})
//	$('.box').on('touchend',function(){
//		$('.box').removeClass('xian');
//	})
//
//})


app.controller('gerenxinxiCtrl',['$scope',function($scope){
    $scope.a=[
        {},
        {}
    ]
}])

app.directive('ngX',[function(){
    return{
        restrict:"A",
        replace:true,
        template:'<li class="gengxin"><div ng-transclude></div></li>',
        transclude:true,
        link:function($scope,el){
            $('.gengxin').on('touchend',function(){
			$('.box').addClass('xian');
		})
		$('.box').on('touchend',function(){
			$('.box').removeClass('xian');
		})
      }
    }
}])











