$('.dropdown-toggle').dropdown();

jQuery(document).ready(function() {
	
	/*
	    Sidebar
	*/
	$('.dismiss, .overlay').on('click', function() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('.open-menu').on('click', function(e) {
    	e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        // close opened sub-menus
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    /* change sidebar style */
	$('a.btn-customized-dark').on('click', function(e) {
		e.preventDefault();
		$('.sidebar').removeClass('light');
	});
	$('a.btn-customized-light').on('click', function(e) {
		e.preventDefault();
		$('.sidebar').addClass('light');
	});
	/* replace the default browser scrollbar in the sidebar, in case the sidebar menu has a height that is bigger than the viewport */
	$('.sidebar').mCustomScrollbar({
		theme: "minimal-dark"
	});
	
	/*
	    Navigation
	*/

	$('.to-top a').on('click', function(e) {
		e.preventDefault();
		if($(window).scrollTop() != 0) {
			$('html, body').stop().animate({scrollTop: 0}, 1000);
		}
	});
	/* make the active menu item change color as the page scrolls up and down */
	/* we add 2 waypoints for each direction "up/down" with different offsets, because the "up" direction doesn't work with only one waypoint */
	$('.section-container').waypoint(function(direction) {
		if (direction === 'down') {
			$('.menu-elements li').removeClass('active');
			$('.menu-elements a[href="#' + this.element.id + '"]').parents('li').addClass('active');
			//console.log(this.element.id + ' hit, direction ' + direction);
		}
	},
	{
		offset: '0'
	});
	$('.section-container').waypoint(function(direction) {
		if (direction === 'up') {
			$('.menu-elements li').removeClass('active');
			$('.menu-elements a[href="#' + this.element.id + '"]').parents('li').addClass('active');
			//console.log(this.element.id + ' hit, direction ' + direction);
		}
	},
	{
		offset: '-5'
	});

    /*
        Background slideshow
    */
	$('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    $('.section-4-container').backstretch("assets/img/backgrounds/2.jpg");
    $('.section-6-container').backstretch("assets/img/backgrounds/1.jpg");
    

});
