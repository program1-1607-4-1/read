

app.directive('nghead', [function() {
	return {
		restrict: 'A',
		template: '<div class="newbook headmy"><div ng-transclude></div></div>',
		replace: true,
		transclude: true,
		link: function($scope, el) {
			$('.headmy').on('click', function() {
				$('.tan').show();
			})
			$('.quxiao').on('click', function() {
				$('.tan').hide();
			})
			$('.sexmy').on('click', function() {
				$('.tan2').show();
			})
			$('.quxiao1').on('click', function() {
				$('.tan2').hide();
			})
		}
	}
}])
app.controller('wodeziliaoCtrl', ['$scope', function($scope) {
	$scope.a = [{}, {}]
}])