$('.hamburger').on('click', function(ev) {
	ev.preventDefault();

	if ( $(this).hasClass('active') ) {
		$(this).removeClass('active');
	} else {
		$(this).addClass('active');
	}
});