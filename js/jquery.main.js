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
	
	/*subscribe popup*/
	$('.js-subscribe').on('click', function(e){
		e.preventDefault();
		$('#js-subscribe-popup').fadeToggle(250);
	});
	
	/*filter*/
	$('#js-filter-btn').on('click', function(){
		$('#js-filter').slideToggle(250);
	});
	
	/*accordion*/
	$('.js-accordion-title').on('click', function(){
		$(this).toggleClass('open').next('.js-accordion-main').slideToggle(250);		
	})
	
	/*video popup*/
    if($('#js-video-vrapper').length){
        var iframe = $('#js-video-container iframe');
        $('.js-blind').on('click', function(){
            var winHeight = $(window).height() / 2,
                blinPos = $(this).offset().top + ($(this).height() / 2),
                scrollPos = blinPos - winHeight;
            $('#js-video-vrapper').fadeIn(250).addClass('show');
            $('html, body').animate({ scrollTop: scrollPos}, 250);
            //$('html').add('body').addClass('no-scroll');
            
            
            var srcAttr = $(this).attr('data-href');
            iframe.attr("src", srcAttr + "?autohide=1&amp;autoplay=1");
        });
        
        $('.js-video-close').on('click', function(){
            $('#js-video-vrapper').fadeOut(250).removeClass('show');
            //$('html').add('body').removeClass('no-scroll');
            iframe.removeAttr("src");
        });
    }
	
});
