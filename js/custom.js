var navbarHeight = 56,
navHeight = $("header").height()-navbarHeight;
/* Add padding-top to body so that content of page */
$(document).ready(function(){
	if($("#myCarousel").hasClass("fullpage")){
		if($(window).width() > 767){
			$("body").css("padding-top", $(window).height()- navbarHeight);
		}else{
			$("body").css("padding-top", $(window).height());
		}
	}
});
$(window).scroll(function() {
	/*if($(window).width() > 767){
		var navbar = $("#stickynav");
		var scrollTop = $(this).scrollTop();
		if (scrollTop >= navHeight) {  // stick to top of window
			navbar.css("position", "fixed").css("top", "0px");
		} else { // allow to scroll to bottom of window, no need to stick to bottom
			navbar.css("position", "relative");
		}
	}*/
	/*
	if(scrollTop > 10){
		navbar.addClass("top-nav-collapse");  // collapse height of menu to 50 and adda  background
		$("#posts-submenu-toggle").removeClass().addClass("dropdown");  //make the dropdown drop UP
	} else {
		navbar.removeClass("top-nav-collapse");  // remove translucent bg from nav bar and increase height to 90 (50 +20 padding top and bottom)
		$("#posts-submenu-toggle").removeClass().addClass("dropup");  // make the dropdown drop DOWN
    }
	*/
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});