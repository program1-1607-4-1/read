		
app.controller("wenzhangCtrl",["$scope",function($scope){
	$scope.a=12;
		
	
}] )
	app.directive("dianJi",[function(){
		return{
			restrict:'AE',
			replace:true,
			transclude:true,
			template:"<div class='zhangjie-box'><div ng-transclude></div></div>",
			link:function($scope,el){
				$(document).on("touchend",function(){
					$(".fix").toggleClass("fix-d");
					$(".title").toggleClass("title-d");
					$(".zhengwen1").toggleClass("zhengwen-d");
					$(".foot").addClass("foot-d");
					$(".shezhi-list").removeClass("shezhi-d");
					$(".liangdu-list").removeClass("liangdu-d");
					return false;
				})
				
			}
		}
	}])
	app.directive("liangDu",[function(){
		return{
			restrict:'AE',
			replace:true,
			transclude:true,
			template:"<li class='liangdu'><div ng-transclude></div></li>",
			link:function($scope,el){
				$(el).on("touchend",function(){
					$(".foot").removeClass("foot-d");
					$(".liangdu-list").toggleClass("liangdu-d");
					return false;
				})
				$(".liangdu-list").on("touchend",false);
				$(".foot .list").on("touchend",false);
				$(document).on("touchend",false);
				
			}
		}
	}])
	app.directive("sheZhi",[function(){
		return{
			restrict:'AE',
			replace:true,
			transclude:true,
			template:"<li class='shezhi'><div ng-transclude></div></li>",
			link:function($scope,el){
				$(el).on("touchend",function(){
					$(".foot").removeClass("foot-d");
					$(".shezhi-list").toggleClass("shezhi-d");
					return false;
				})
				$(".shezhi-list").on("touchend",false);
				$(".foot .list").on("touchend",false);
				$(document).on("touchend",false);
			}
		}
	}])
	
	
	
	
	
	
