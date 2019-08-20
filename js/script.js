$(document).ready(function(){
  		// LAST WINNERS SLIDER
	  	$('.slider').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  responsive: [{
	            breakpoint: 767, // mobile breakpoint
	            settings: {
	                slidesToShow: 2,
	                slidesToScroll: 1
	            }
	        }]
		});

		// PROMO SLIDER
		$('.promo_slider').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows:false,
		  dots: true
		});

		// NAVIGATION
		$('.menu').on('click', function() {
		    var t = $(this);
		    var menu = $( 'nav ul' );
		    t.toggleClass( 'open' );
		    if( menu.is( ':visible' ) ) {
		        menu.slideUp();
		    } else {
		        menu.slideDown();
		    }
		});

		// POPUP
		var $body = $(window.document.body);
	    function bodyFreezeScroll() {
	        $body.css({'overflow': 'hidden', 'position': 'relative'});
	    }
	    function bodyUnfreezeScroll() {
	        $body.css({'overflow': 'auto', 'position': 'relative'});
	    }
		$('.popup_registration').on('click', function() {
			$('body').addClass('open');
			if($(window).width() < 767) {
				bodyFreezeScroll();
			}
		}); 
		$('.close_popup, .bg_overlay').click(function(){
			$('body').removeClass('open');
			if($(window).width() < 767) {
				bodyUnfreezeScroll();
			}
		});

		// LANG SWITCHER
		// $('.mobile_sing .btn_blue').click(
		// 	function(){ $('.popup_registration').addClass('hover') },
		// 	function(){ $(this).removeClass('hover')}
		// );
});