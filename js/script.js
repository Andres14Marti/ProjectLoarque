$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px","opacity": "1"});

				$("header").css({"background-color": "#965752", "opacity": "0.8"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "250px","height":"250px", "opacity":"0.8"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});
