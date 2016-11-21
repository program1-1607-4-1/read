

app.controller('gerenxinxiCtrl',['$scope',function($scope){
    $scope.a=[
        {},
        {}
    ]
}])

app.directive('ngGenxin',[function(){
    return{
        restrict:"A",
        replace:true,
        transclude:true,
        template:'<li class="gengxin"><div ng-transclude></div></li>',
        link:function($scope,el){
            $(el).on('touchend',function(){
			    $('.box').addClass('xian1');
            })
    		$('.box').on('touchend',function(){
    			$('.box').removeClass('xian1');
    		})
        }
    }
}])











