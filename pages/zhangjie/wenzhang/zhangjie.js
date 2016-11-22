
//	app.directive("dianJi",[function(){
//		return{
//			restrict:'AE',
//			replace:true,
//			transclude:true,
//			template:"<div class='zhangjie-box'><div ng-transclude></div></div>",
//			link:function($scope,el){
//				$(".neirong").on("touchend",function(){
//					$(".fix").toggleClass("fix-d");
//					$(".title").toggleClass("title-d");
//					$(".zhengwen1").toggleClass("zhengwen-d");
//					$(".zj-foot").addClass("foot-d");
//					$(".shezhi-list").removeClass("shezhi-d");
//					$("#liangdu-list").removeClass("liangdu-d");
//					return false;
//				})
//				$(".zj-a").on('click',false);
////				
//			}
//		}
//	}])





//	app.directive("liangDu",[function(){
//		return{
//			restrict:'AE',
//			replace:true,
//			transclude:true,
//			template:"<li class='liangdu'><div ng-transclude></div></li>",
//			link:function($scope,el){
//				$(el).on("touchend",function(){
//					$(".zj-foot").removeClass("foot-d");
//					$("#liangdu-list").toggleClass("liangdu-d");
//					return false;
//				})
//				$(".liangdu-list").on("touchend",false);
//				$(".zj-foot").on("touchend",false);
//				$(document).on("touchend",false);
//				
//			}
//		}
//	}])
//	app.directive("sheZhi",[function(){
//		return{
//			restrict:'AE',
//			replace:true,
//			transclude:true,
//			template:"<li class='shezhi'><div ng-transclude></div></li>",
//			link:function($scope,el){
//				$(el).on("touchend",function(){
//					$(".zj-foot").removeClass("foot-d");
//					$(".shezhi-list").toggleClass("shezhi-d");
//					return false;
//				})
//				$(".shezhi-list").on("touchend",false);
//				$(".zj-foot").on("touchend",false);
//				
//			}
//		}
//	}])
//	
	
	
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
		wenzi:"纯色羊皮",
		more:''
	},
	{
		color:"bg-two",
		wenzi:"经典一",
		more:''
	},
	{
		color:"bg-three",
		wenzi:"经典二",
		more:''
	},
	{
		color:"bg-four",
		wenzi:"蓝色图腾",
		more:''
	},
	{
		color:"bg-five",
		wenzi:"美丽星空",
		more:''
	},
	{
		color:"bg-six",
		wenzi:"少女情怀",
		more:''
	},
	{
		color:"bg-seven",
		wenzi:"养眼绿色",
		more:''
	},
	{
		color:"bg-eight",
		wenzi:"自定义",
		more:'+'
	}
	];
		
   $scope.textAdd=function(){
		var title=$(".title")
		var header=$(".header")
		var zj_foot=$(".zj-foot")
		var gudi=$(".gudi")
		var zhengwen=$(".zhengwen")
		var yueliang=$(".yueliang")
		if(header.hasClass("header-d")){
			header.removeClass("header-d")
			zj_foot.removeClass("foot-d")
			yueliang.removeClass("yueliang-d")
			gudi.removeClass("gudi-d")
			title.addClass("title-d")
			zhengwen.removeClass("zhengwen-d")
			$(".zj-footer").removeClass("zj-footer-d")
			$("#liangdu-list").removeClass("liangdu-d")
			$(".shezhi-list").removeClass("shezhi-d")
		}else{
			$(".zj-footer").addClass("zj-footer-d")
			header.addClass("header-d")
			zj_foot.addClass("zj-foot-d")
			yueliang.addClass("yueliang-d")
			gudi.addClass("gudi-d")
			zhengwen.addClass("zhengwen-d")
			title.removeClass("title-d")
		}
	}
   	$scope.setAdd=function(){
		var zj_footer=$(".zj-footer")
		var liangdu_list=$("#liangdu-list")
		zj_footer.removeClass("zj-footer-d")
		liangdu_list.addClass("liangdu-d")
		console.log(1)
	}
	$scope.nessAdd=function(){
		var zj_footer=$(".zj-footer")
		var shezhi_list=$(".shezhi-list")
		 zj_footer.removeClass("zj-footer-d")
		shezhi_list.addClass("shezhi-d")
	}
   $scope.colAdd=function(index){
		$(".bg-color").removeClass("bg-color-d")
		$(".bg-color").eq(index).addClass("bg-color-d")
		console.log($(".bg-color").eq(index))
		var col=$scope.shuzu[index].color
		$("#zhangjie-box").attr("class","")
		$(".yejiao").attr("class","yejiao")
		$("#zhangjie-box").addClass(col)
		$(".yejiao").addClass(col)
	}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
}] )

