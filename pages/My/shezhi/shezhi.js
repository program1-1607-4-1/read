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
          $('.kuang .xiuxi').on('touchend',function(){
			$('.bbox').addClass('xian-1');
			$('.kuang').addClass('muohu');
		})
		$('.bbox').on('touchend','.queding',function(){
			$('.box').removeClass('xian-1');
			$('.kuang').removeClass('muohu');
		})
		$('.bbox').on('touchend','.quxiao',function(){
			$('.bbox').removeClass('xian-1');
			$('.kuang').removeClass('muohu');
		})
		$('.kuang .cleras').on('touchend',function(){
			$('.qingchu').addClass('show-1');
			$('.kuang').addClass('muohu');
		})
		$('.qingchu').on('touchend','.queding',function(){
			$('.qingchu').removeClass('show-1');
			$('.kuang').removeClass('muohu');
		})
		$('.qingchu').on('touchend','.quxiao',function(){
			$('.qingchu').removeClass('show-1');
			$('.kuang').removeClass('muohu');
		})
      }
    }
}])





















