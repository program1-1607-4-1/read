app.config([
	"$routeProvider",
	function($routeProvider){
		// 模板
		$routeProvider.when("/shucheng",{
			templateUrl:"pages/shucheng/jingxuan/jingxuan.html",
			controller:"jingxuanCtrl"
		}).when("/bangdan",{
			templateUrl:"pages/shucheng/bangdan/bangdan.html",
			controller:"bangdanCtrl"
		})
	}])