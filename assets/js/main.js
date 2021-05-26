$(window).load(function () {
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 20) {
			$('.main-header').addClass('sticky')
		} else {
			$('.main-header').removeClass('sticky')
		}
	});

	$('.preloader').fadeOut();

})

// owl carousel js 

$(document).ready(function () {

	// nav section 

	$('#nav').onePageNav();

	//banner owl carousel section

	$('.banner-section').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		dots: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	// project pop up section 

	$('.project-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// counter up section 

	$('.counterup').counterUp({
		delay: 10,
		time: 1000
	});

	//video popup section 

	$('.vido-popup').magnificPopup({
		type: 'iframe'
	});

	//testimonial owlcarousel function 

	$('.testimonial').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 2000,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 2
			}
		}
	});

	// market place section 

	$('.client').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 2000,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});


})


//header section sticky mode

$(window).on('scroll', function () {
	if ($(this).scrollTop() > 20) {
		$('.header').addClass('sticky')
	} else {
		$('.header').removeClass('sticky')
	}
})



$(document).ready(function () {

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			$('#scrollTop').fadeIn()
		} else {
			$('#scrollTop').fadeOut()
		}
	})

	$('#scrollTop').on('click', function () {

		$('html , body').animate({
			scrollTop: 0
		}, 1500)

	})


})
