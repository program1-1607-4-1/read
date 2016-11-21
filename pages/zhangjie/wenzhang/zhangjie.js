
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
					$(".zj-foot").addClass("foot-d");
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
					$(".zj-foot").removeClass("foot-d");
					$(".liangdu-list").toggleClass("liangdu-d");
					return false;
				})
				$(".liangdu-list").on("touchend",false);
				$(".zj-foot .list").on("touchend",false);
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
					$(".zj-foot").removeClass("foot-d");
					$(".shezhi-list").toggleClass("shezhi-d");
					return false;
				})
				$(".shezhi-list").on("touchend",false);
				$(".zj-foot .list").on("touchend",false);
				$(document).on("touchend",false);
			}
		}
	}])
	
	
	
//	app.directive("bG",[function(){
//		return{
//			restrict:'AE',
//			replace:true,
//			transclude:true,
//			template:"<ul class='bg-tu'><div ng-transclude></div></ul>",
//			link:function($scope,el){
//				$(el).on("touchend","li",function(){
//					var index=$(this).index();
//					$(".zhangjie-box").addClass($scope.shuzu[index].color);
//					
//				})
//			
//			
//			
//		}	
//	}])
	
	
	
	
	
app.controller("wenzhangCtrl",["$scope",function($scope){
	$scope.u=0;
	$scope.shuzu=[
	{
		color:"bg-one",
		wenzi:"纯色羊皮"
	},
	{
		color:"bg-two",
		wenzi:"经典一"
	},
	{
		color:"bg-three",
		wenzi:"经典二"
	},
	{
		color:"bg-four",
		wenzi:"蓝色图腾"
	},
	{
		color:"bg-five",
		wenzi:"美丽星空"
	},
	{
		color:"bg-six",
		wenzi:"少女情怀"
	},
	{
		color:"bg-seven",
		wenzi:"养眼绿色"
	},
	{
		color:"bg-eight",
		wenzi:"自定义"
	}
	];
		

}] )