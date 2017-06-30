"use strict";

(function() {
	var slides = document.querySelectorAll('.main-carousel .carousel-cells article'), currentView = 0;
	var Carousel = {
		props:{
			current_slide: null,
			total_slides:null
		},
		init:function(){
			slides[0].className = "animated fadeInRight";
			var control1 = document.querySelector('.carousel-next');
			var control2 = document.querySelector('.carousel-prev');
			control1.addEventListener("click", this.next);
			control2.addEventListener("click", this.previous);
			window.onkeydown = function(e){
			    if(e.keyCode === 37){
			       Carousel.previous();
			    }if(e.keyCode === 39){
			       Carousel.next();
			    }
			};
		},
		next:function(){
			slides[currentView].className = '';
			currentView = (currentView+1+slides.length)%slides.length;
			slides[currentView].className = "animated fadeInRight"
		},
		previous:function(){
			slides[currentView].className = '';
			currentView = (currentView-1+slides.length)%slides.length;
			slides[currentView].className = "animated fadeInLeft"
		}
	}
	$(function(){
		Carousel.init();
	})

})();