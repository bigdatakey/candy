$(document).ready(function(){
	/*fix menu*/
    $(window).on('scroll', function(){
		
		var headerHeight = ($('#js-header').innerHeight() + 50),
			scrollTop = $(window).scrollTop();
		console.log(headerHeight, scrollTop);
		if(scrollTop > headerHeight){
			$('#js-header-fix').addClass('fix');
		} else{
			$('#js-header-fix').removeClass('fix');			
		}		
	});
	
	/*mob menu*/
	$('.js-mob-menu-btn').on('click', function(){
		$('#js-main-menu').toggleClass('open');
	});
	
	/*sign-in popup*/
	$('.js-sign-in-btn').on('click', function(e){
		e.preventDefault();
		$('#js-sign-in-popup').fadeIn(250);
	});
	$('.js-sign-in-close').on('click', function(){
		$('#js-sign-in-popup').fadeOut(250);
	});
	
	/*sign-up popup*/
	$('.js-sign-up-btn').on('click', function(e){
		e.preventDefault();
		$('#js-sign-up-popup').fadeIn(250);
	});
	$('.js-sign-up-close').on('click', function(){
		$('#js-sign-up-popup').fadeOut(250);
	});
	
	/*filter*/
	$('#js-filter-btn').on('click', function(){
		$('#js-filter').slideToggle(250);
	});
});
