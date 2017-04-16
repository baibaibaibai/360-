
$(function () {
	var firstTop=$(window).scrollTop();

	$(document).on("mousewheel DOMMouseScroll", function (e) {
 		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
	                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

	    var load_slider=true;
	    if (delta > 0) {
	        // 向上滚
	        page1_uscroll();
		 	page2_uscroll();
		 	page3_uscroll();
		 	page4_uscroll();

	    } else if (delta < 0) {
	        //向下滚
			page1_dscroll();
		 	page2_dscroll();
		 	page3_dscroll();
		 	page4_dscroll();
			
	    }
	});

});
var page_1_start=true;
var page_1_up=false;
var page_2_start=true;
var page_3_start=true;
var page_4_start=true;
function page1_dscroll(){

	if($(window).scrollTop()>20){
		if (page_1_start) {
			//$('body').animate({scrollTop:$('.bgwz_bg').offset().top},2000);
			$('body,html').stop(true,true).animate({scrollTop: $('.bgwz_bg').offset().top},2000);
			$('.bgwz_bg').css("transition", "all " +  "2000ms " + " ease");
			$('.bgwz_bg').css("opacity" , 1);

			var wheelHeight=$('.brwser').offset().top-$(window).scrollTop();
			var translate = "translateY("+(wheelHeight+300)+"px)";
			$('.brwser').css("transform" , "translateY(850px)");
			$('.brwser').css("transition", "all " +  "1500ms " + " ease");
			$('.btab').css("transform" , "translateY(850px) translateX(-400px)");
			$('.btab').css("transition", "all " +  "1500ms " + " ease");
			$('.brwser').css("opacity" , 0.8);
			$('.titleAnim').css("opacity" , 0);
			$('.titleAnim').css("transition", "all " +  "1000ms " + " ease");
			//$('.brwser_skin_5').hidden();
			$('.bwave').css("opacity" , 1);
			$('.bwave').css("transition", "all " +  "2000ms " + " ease");
			$('.bwave a').mouseover(function(){
				$('.bwave').hide();
				$('.btab').hide();
				$('.brwser_skin_5').hide();
				$('.flexslider').show();
					$('.flexslider').flexslider({
					    directionNav: false,
					    pauseOnAction: false
					  });
				
			});
			page_1_start=false;
			page_1_up=true;
	 	}
	}
	
}
function page1_uscroll(){

	 if (page_1_up&&$(window).scrollTop()<$('.bgwz_bg').offset().top) {
	 	$('.titleAnim').css("opacity" , 1);
		$('.titleAnim').css("transition", "all " +  "1000ms " + " ease 2000ms");
		$('html').css("transform" , "translateY(0px)");
		//$('body').animate({scrollTop:0},2000);
		$('body,html').stop(true,true).animate({scrollTop: 0},2000);
		//$('.btab').show();
		$('.btab').css("transform" , "translateY(46px) translateX(-373px)");
	    $('.btab').css("transition", "all " +  "1500ms " + " ease 1450ms");
		
		$('.bwave').css("opacity" , 0);
		$('.bwave').css("transition", "all " +  "1000ms " + " ease");
		$('.brwser').css("transform" , "perspective(875px) rotateX(25deg) translate3d(0,0,0)");
		$('.brwser').css("transition", "all " +  "900ms " + " ease 1700ms");
		$('.brwser').css("opacity" , 1);
		$('.bwave').show();
		$('.brwser_skin_5').show();
		$('.flexslider').hide();
		$('.bwave a').unbind("mouseover");
	 	page_1_start=true;
	 	page_1_up=false;
	 }
}
function page2_dscroll(){
	
	var winH=$(window).height()*0.9;
	 var top=$(window).scrollTop();
	 var ele_t=$('.page_2').offset().top;
	 var ele_h=$('.page_2').height();
	 
	 if (top>ele_t-winH) {
	 	$('.page_2').addClass('addAnimation');
	 	console.log('加');
	 	if (page_2_start) {
			//$('body').animate({scrollTop:$('.page_2').offset().top},'slow');
			$('body,html').stop(true,true).animate({scrollTop: $('.page_2').offset().top},'slow');
			page_2_start=false;
	 	}
	 	
	}
}
function page2_uscroll(){
	var winH=$(window).height();
	 var top=$(window).scrollTop();
	 var ele_t=$('.page_2').offset().top;
	 var ele_h=$('.page_2').height();

	 if (top<ele_t-ele_h) {
	 	$('.page_2').removeClass('addAnimation');
	 	console.log('删');
	 	page_2_start=true;
	 }
}

function page3_dscroll(){
	
	var winH=$(window).height()*0.9;
	 var top=$(window).scrollTop();
	 var ele_t=$('.page_3').offset().top;
	 var ele_h=$('.page_3').height();
	 
	 if (top>ele_t-winH) {
	 	$('.page_3').addClass('addAnimation');
	 	console.log('加');
	 	if (page_3_start) {
			//$('body').animate({scrollTop:$('.page_3').offset().top});
			$('body,html').stop(true,true).animate({scrollTop: $('.page_3').offset().top});
			page_3_start=false;
	 	}
	 	
	}
}
function page3_uscroll(){
	var winH=$(window).height();
	 var top=$(window).scrollTop();
	 var ele_t=$('.page_3').offset().top;
	 var ele_h=$('.page_3').height();

	 if (top<ele_t-ele_h) {
	 	$('.page_3').removeClass('addAnimation');
	 	console.log('删');
	 	page_3_start=true;
	 }
}
function page4_dscroll(){
	
	var winH=$(window).height()*0.9;
	 var top=$(window).scrollTop();
	 var ele_t=$('.lastwrap').offset().top;
	 var ele_h=$('.lastwrap').height();
	 
	 if (top>ele_t-winH) {
	 	$('.p4ct').addClass('floatAm');
	 	console.log('加');
	 	if (page_4_start) {
			//$('body').animate({scrollTop:$('.lastwrap').offset().top});
			$('body,html').stop(true,true).animate({scrollTop: $('.lastwrap').offset().top});
			page_4_start=false;
	 	}
	 	
	}
}
function page4_uscroll(){
	var winH=$(window).height();
	 var top=$(window).scrollTop();
	 var ele_t=$('.lastwrap').offset().top;
	 var ele_h=$('.lastwrap').height();

	 if (top<ele_t-ele_h) {
	 	$('.p4ct').removeClass('floatAm');
	 	console.log('删');
	 	page_4_start=true;
	 }

}
