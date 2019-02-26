$(document).ready(function(){	
	$('#js-index-slider').slick({
    	slidesToShow: 3,
    	slidesToScroll: 1,
    	arrows: true,
    	dots: false,
    	infinite: true,
        responsive: [
			{
				breakpoint: 768,
				settings: {
                	slidesToShow: 2
				}
			},
			{
				breakpoint: 440,
				settings: {
                	slidesToShow: 1
				}
			}
		]
	});
            
	$('#js-main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: false
	});
	$('.js-main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: false
	});
	
             
    $('#js-carusel').slick({
    	slidesToShow: 5,
    	slidesToScroll: 1,
    	arrows: true,
    	dots: false,
    	infinite: true,
        responsive: [
			{
				breakpoint: 768,
				settings: {
                	slidesToShow: 1
				}
			}
		]
	});
	$('#js-carusel-popup').slick({
    	slidesToShow: 4,
    	slidesToScroll: 1,
    	arrows: true,
    	dots: false,
    	infinite: true,
        responsive: [
			{
				breakpoint: 768,
				settings: {
                	slidesToShow: 1
				}
			}
		]
	});
	
	$('#js-gallery-slider').slick({
	 	slidesToShow: 1,
	 	slidesToScroll: 1,
	 	arrows: true,
	 	fade: true,
		infinite: false,
	 	asNavFor: '#js-gallery-carusel',
        responsive: [
			{
				breakpoint: 768,
				settings: {
                	arrows: false
				}
			}
		]
	});
	$('#js-gallery-carusel').slick({
	 	slidesToShow: 4,
	 	slidesToScroll: 1,
	 	asNavFor: '#js-gallery-slider',
	 	dots: false,
		infinite: false,
	 	focusOnSelect: true,
        responsive: [
			{
				breakpoint: 768,
				settings: {
                	arrows: true,
					slidesToShow: 3
				}
			}
		]
	});

    if ($('.js-gallery').length){
    $('.js-gallery').colorbox({ opacity:.7 , rel:'carusel_img', current: false });
		$.colorbox.settings.maxWidth  = '95%';
		var resizeTimer;
		function resizeColorBox(){
		  if (resizeTimer) clearTimeout(resizeTimer);
		  resizeTimer = setTimeout(function() {
			if ($('#cboxOverlay').is(':visible')) {
						$.colorbox.load(true);
			}
		  }, 300);
		} 
		$(window).resize(resizeColorBox);
		window.addEventListener("orientationchange", resizeColorBox, false);
	}
    
});
