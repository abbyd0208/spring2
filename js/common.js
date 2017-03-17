// JavaScript Document

//讓捲軸用動畫的方式移動到到指定的位罝======================
$(function(){
	
	$(".scrollgo").click(function(){
		
		var sGoTo = $(this).attr("rel"); //取得目標物的id class
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		
		$body.animate({
			scrollTop: $(sGoTo).offset().top
		}, 1000);
		
		return false;
	});
});

//gototop
$(function(){
	
	var iScrollPointA = 0;  //回到某一個點
	var iScrollPointB = 700;  //滾到某一個點
	
	var sGototopHtml = '<div class="gototop">TOP</div>';

	$("body").append(sGototopHtml);
	$(".gototop").hide();
	
	$(window).scroll(function(){
		if( $(window).scrollTop() > iScrollPointB) {
			$(".gototop").show();	
		} else {
			$(".gototop").hide();	
		};
	});
	
	
	// 讓捲軸用動畫的方式移動到到指定id位罝
	$(".gototop").click(function(){
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 1000);
		return false;
	});
	
});


//地圖
$(document).ready(function () {
	$('iframe[src*="map.htm"]').wrap('<div class="mapcontent" />');
});