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
 
});
