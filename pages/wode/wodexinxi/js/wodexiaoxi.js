app.controller('wodexiaoxiCtrl', ['$scope', function($scope) {
    $scope.a = 12;
}])
app.directive('ngHead', [function() {
	return {
		restrict: 'A',
		replace: true,
		transclude: true,
		template: '<div class="system actives headmy"><div ng-transclude></div></div>',
		link: function($scope,el) {
			$(el).find('.wz1').on("click",function(){
        		$(".wcontent2").css("left","-3.7rem").show();
        		$(".wcontent1").css("left","-3.7rem").hide();
        		$('.system1').addClass('active');
        		$('.system').removeClass('actives');
            });
        	$(el).find('.wz').on("click",function(){
        		$(".wcontent1").css("left","3.7rem").show();
        		$(".wcontent2").css("left","3.7rem").hide();
        		$('.system').addClass('actives');
        		$('.system1').removeClass('active');
        	});
		}
	}
}])
