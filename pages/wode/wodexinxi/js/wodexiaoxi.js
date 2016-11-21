//$(document).ready(function(){
//	$('.wz1').on("click",function(){
//		$(".wcontent2").css("left","-3.7rem").show();
//		$(".wcontent1").css("left","-3.7rem").hide();
//		$('.system1').addClass('active');
//		$('.system').removeClass('actives');
//		
//		
//	})
//	$('.wz').on("click",function(){
//		$(".wcontent1").css("left","3.7rem").show();
//		$(".wcontent2").css("left","3.7rem").hide();
//		$('.system').addClass('actives');
//		$('.system1').removeClass('active');
//		
//	})
//})

app.directive('nghead', [function() {
	return {
		restrict: 'A',
		template: '<div class="system actives headmy"><div ng-transclude></div></div>',
		replace: true,
		transclude: true,
		link: function($scope, el) {
			$('.wz1').on("click",function(){
		$(".wcontent2").css("left","-3.7rem").show();
		$(".wcontent1").css("left","-3.7rem").hide();
		$('.system1').addClass('active');
		$('.system').removeClass('actives');
		
		
	})
	$('.wz').on("click",function(){
		$(".wcontent1").css("left","3.7rem").show();
		$(".wcontent2").css("left","3.7rem").hide();
		$('.system').addClass('actives');
		$('.system1').removeClass('active');
		
	})
		}
	}
}])
app.controller('wodexiaoxiCtrl', ['$scope', function($scope) {
	$scope.a = [{}, {}]
}])