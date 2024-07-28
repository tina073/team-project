$(function(){
    $('.hamBtn').click(function() {
		$(this).toggleClass('act');
			if($(this).hasClass('act')) {
				$('.hamBg').addClass('act');
				$('.menu').addClass('act');
			}
			else {
				$('.hamBg').removeClass('act');
				$('.menu').removeClass('act');
			}
	});
})