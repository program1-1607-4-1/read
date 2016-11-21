//$(function(){
//	$('.tixing').on('touchend',function(){
//		$('.box').addClass('xian');
//		$('.kuang').addClass('muohu');
//	})
//	$('.box').on('touchend','.queding',function(){
//		$('.box').removeClass('xian');
//		$('.kuang').removeClass('muohu');
//	})
//	$('.box').on('touchend','.quxiao',function(){
//		$('.box').removeClass('xian');
//		$('.kuang').removeClass('muohu');
//	})
//	$('.last').on('touchend',function(){
//		$('.qingchu').addClass('show');
//		$('.kuang').addClass('muohu');
//	})
//	$('.qingchu').on('touchend','.queding',function(){
//		$('.qingchu').removeClass('show');
//		$('.kuang').removeClass('muohu');
//	})
//	$('.qingchu').on('touchend','.quxiao',function(){
//		$('.qingchu').removeClass('show');
//		$('.kuang').removeClass('muohu');
//	})
//	
//})
app.controller('shezhiCtrl',['$scope',function($scope){
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
          $('.tixing').on('touchend',function(){
			$('.box').addClass('xian');
			$('.kuang').addClass('muohu');
		})
		$('.box').on('touchend','.queding',function(){
			$('.box').removeClass('xian');
			$('.kuang').removeClass('muohu');
		})
		$('.box').on('touchend','.quxiao',function(){
			$('.box').removeClass('xian');
			$('.kuang').removeClass('muohu');
		})
		$('.last').on('touchend',function(){
			$('.qingchu').addClass('show');
			$('.kuang').addClass('muohu');
		})
		$('.qingchu').on('touchend','.queding',function(){
			$('.qingchu').removeClass('show');
			$('.kuang').removeClass('muohu');
		})
		$('.qingchu').on('touchend','.quxiao',function(){
			$('.qingchu').removeClass('show');
			$('.kuang').removeClass('muohu');
		})
      }
    }
}])





















