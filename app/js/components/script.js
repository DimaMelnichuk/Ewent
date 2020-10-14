let swiperTestimonials = new Swiper('.swiper-container', {
	slidesPerView: 2,
	loop: true,
	spaceBetween: 80,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		767.98: {
			slidesPerView: 2,
			loop: true,
			spaceBetween: 60,
		},
		991.98: {
			spaceBetween: 80,
		}
	}
});