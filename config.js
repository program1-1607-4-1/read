app.config([
	"$routeProvider",
	function($routeProvider){
		// 模板
		$routeProvider.when("/",{
			templeteUrl:"pages/enter/login/login.html"
		})
	}])