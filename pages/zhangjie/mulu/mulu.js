app.controller("muluCtrl",["$scope",function($scope){
	$scope.a=[
	   {},
	   {}
	]
	$scope.topM=function(){
		var top_m=$(".top-m");
		var top_s=$(".top-s");
		var top_b=$(".top-b");
		var m_list=$(".mulu-lists1");
		var s_list=$(".shuqian-list");
		var b_list=$(".biji-list");
		top_m.addClass("top-mulu");
		top_s.removeClass("top-shu");
		top_b.removeClass("top-bj");
		m_list.addClass("m-list");
		s_list.removeClass("s-list");
		b_list.removeClass("b-list");
	}
	
	$scope.topS=function(){
		var top_m=$(".top-m");
		var top_s=$(".top-s");
		var top_b=$(".top-b");
		var m_list=$(".mulu-lists1");
		var s_list=$(".shuqian-list");
		var b_list=$(".biji-list");
		top_m.removeClass("top-mulu");
		top_s.addClass("top-shu");
		top_b.removeClass("top-bj");
		m_list.removeClass("m-list");
		s_list.addClass("s-list");
		b_list.removeClass("b-list");
	}
	
	
	$scope.topB=function(){
		var top_m=$(".top-m");
		var top_s=$(".top-s");
		var top_b=$(".top-b");
		var m_list=$(".mulu-lists1");
		var s_list=$(".shuqian-list");
		var b_list=$(".biji-list");
		top_m.removeClass("top-mulu");
		top_s.removeClass("top-shu");
		top_b.addClass("top-bj");
		m_list.removeClass("m-list");
		s_list.removeClass("s-list");
		b_list.addClass("b-list");
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}] );