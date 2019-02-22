$(document).ready(function(){
	/*fix menu*/
    $(window).on('scroll', function(){
		
		var headerHeight = ($('#js-header').innerHeight() + 50),
			scrollTop = $(window).scrollTop();
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
		
	
 	/*кнопка скролл*/
     $('.js-menu-item').click(function(e){
         e.preventDefault();
         var anchor = $(this).attr("href");
         var scroll_el = $(anchor);
         if ($(scroll_el).length != 0) { 
             $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 250); 
         }
     });
 
 
	/*fix menu*/
	if($(window).width() > 767){

		if($('#js-filter').height() < ($('.catalog__main').height() - 30)){
			console.log($('#js-filter').height(), $('.catalog__main').height());
			var lastPos = $(window).scrollTop(),
				lastWinPos = lastPos,
				jsFilter = $('#js-filter'),
				lastWinPath = 0,
				winStep = 0,
				newPos = lastPos;
			$(window).on('scroll', function(){
				var headerHeight = ($('#js-header').innerHeight() + 50),
					fixHeaderHeight = $('#js-header-fix').innerHeight(),
					windHeight = $(window).height(),
					windPos = $(window).scrollTop(),
					windBot = $(window).scrollTop() + windHeight,
					catalogPos = $('.catalog').offset().top,
					catalogBot = catalogPos + $('.catalog__main').height(),
					filterPos = jsFilter.offset().top,
					filterHeight = jsFilter.height(),
					filterBot = filterPos + filterHeight,
					scrollTop = $(window).scrollTop();
				
				
				newPos = $(window).scrollTop();
				winStep = newPos - lastPos;
				if((filterHeight + 50) > (windHeight - fixHeaderHeight)){
					if(((windPos + fixHeaderHeight) >= catalogPos) && (windBot <= catalogBot) ){

						if(newPos > lastPos){
							//down
							if(filterBot >= windBot){
								lastWinPath = lastWinPath + winStep;
								jsFilter.removeClass('bot').addClass('fix').removeAttr('style').css({
									top: -lastWinPath + fixHeaderHeight + 'px'
								});
							} else {							
								jsFilter.removeClass('bot').addClass('fix').removeAttr('style').css({
									top: 'auto',
									bottom: 1 + 'px'
								});
							}
						} else{
							//up
							if( (filterPos) <= (windPos + fixHeaderHeight) ){
								lastWinPath = lastWinPath + winStep;
								jsFilter.removeClass('bot').addClass('fix').removeAttr('style').css({
									top: -lastWinPath + fixHeaderHeight + 'px'
								});
							} else{
								jsFilter.removeClass('bot').addClass('fix').removeAttr('style').css({
									top: fixHeaderHeight + 1 + 'px'
								});
							}
						}
						lastPos = newPos;
					}
					else if (windBot > catalogBot){
						jsFilter.addClass('bot').removeClass('fix');
					}
					else{
						jsFilter.removeClass('fix').removeClass('bot').removeAttr('style');
					}
				}
				else{

					if( ((windPos + fixHeaderHeight) >= catalogPos)){
						if(filterBot < (catalogBot - 20)){

							if( ((fixHeaderHeight + filterHeight + windPos) < catalogBot) ){
								jsFilter.removeClass('bot').addClass('fix').removeAttr('style').css({
									top: fixHeaderHeight + 'px'
								});
							} else{
								jsFilter.addClass('bot').removeClass('fix').removeAttr('style');
							}
							
						} else{
							jsFilter.addClass('bot').removeClass('fix').removeAttr('style');
						}
					}
					else{
						jsFilter.removeClass('fix').removeClass('bot').removeAttr('style');
					}
				}

			});
			
		}
	}
	
});
