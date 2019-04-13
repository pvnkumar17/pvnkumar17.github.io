$(function () {
	// Detect Publisher "Edit" view
	if (location.href.indexOf('JSPeditPageContent.do') > 0) {
		// Code here will run when viewing site in Edit View - needed when certain elements break Edit View
		// Example: $('.container-accolades, .container-tagline').remove();
	} else {
		// Code in this section will not run on Publisher edit view

		// Fix link targets (v1.0.2)
		(function(){if($(document.body).hasClass("fl-target-ignore")===!0)return!1;var t=location.protocol+"//"+location.host,a=/\.(?:pdf|docx?|xlsx?|pptx?|xml)(?:\?.*)?$/i,l=/\?.*/i;$("a").each(function(r,o){var i=$(o),e=i.attr("href"),n=o.href;return void 0!==e&&(e=e.replace(l,"")),void 0!==n&&(n=n.replace(l,"")),void 0===e||i.hasClass("fl-target-ignore")===!0||null!==e.match(/^#/)||null!==e.match(/^javascript:/i)||null!==e.match(/^mailto:/i)||0===n.indexOf(t)&&null===n.match(a)?!0:void i.attr("target","_blank")})}());
	}
	$(function () {
		// Floating Element (Follow Me)
		$('#floatingElement').followMe({ container: 'body' });
	});
	$(document).ready(function() {
	     $(function() {
	         $(".back-to-top").click(function() {
	             $('body,html').animate({
	                 scrollTop: 0
	             }, 1000);
	             return false;

	         });
	     });
	});
	$(function() {
		$('.testimonial ul').cycle({
			fx: 'fadeSlideLeft',
			timeout: 10000,
			slides: '> li',
			speed: 2000
		});
	});

    $(document).ready(function(){
		var bannerHeaderWrap = $("#banner-header-wrap");
		var brandImage = $(".brand-image");
		$(window).bind('scroll', function() {
		    
		  if ($(window).scrollTop() > 60) {
		    bannerHeaderWrap.addClass("fix-header");
		    //brandImage.attr('src', '/design/images/brand-scrolled.png');
		  } else {
		    bannerHeaderWrap.removeClass("fix-header");
		    //brandImage.attr('src', '/design/images/brand.jpeg');
		  }
		  
		});
		
	});
	$("img.down-1").click(function() 
			{$('body,html').animate({scrollTop: $(".nav-practice-wrap").offset().top},
		 1000)});
	$("img.down-2").click(function() 
			{$('body,html').animate({scrollTop: $(".contanier-testimonial").offset().top},
		 1000)});
	$(".short-form .intakeFormShortPrivacy a").appendTo(".short-form .formCheck");
	$(".short-form p:first").addClass("firstElem");
	// $('.contextual-logo').insertBefore("article.content p:last");
	// $('a.office-map-link, a.office-page-link').insertAfter(".office-2");
	$('.office-1 br:last').remove();
	$('.office-2 .office-phone-tracking').replaceWith('(by appointment only)');
	$('.btn-nav-main').click(function() {
	$('.nav-practice').removeClass('fl-show');
	$('.btn-nav-practice').removeClass('fl-scripts-toggle-enabled');
	return false;
	});

	$('.btn-nav-practice').click(function() {
		$('.nav-main').removeClass('fl-show');
		$('.btn-nav-main').removeClass('fl-scripts-toggle-enabled');
		return false;
	});
});