$(document).ready(function(){
            
	$('#js-main-slider').slick({
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
 
});
