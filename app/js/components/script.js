let swiperTestimonials = new Swiper('.testimonials__slider', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	loop: true,
	spaceBetween: 80,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		991.98: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			loop: true,
			spaceBetween: 80,
		}
	}
});

let swiperTestimonials2 = new Swiper('.testimonials__slider-v2', {
	slidesPerView: 1,
	spaceBetween: 80,
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	
});

let swiperTestimonials3 = new Swiper('.testimonials__slider-v3', {
	slidesPerView: 1,
	spaceBetween: 80,
	loop: true,

	breakpoints: {
		991.98: {
			slidesPerView: 2,
			slidesPerColumn: 2,
			slidesPerGroup: 2,
			slidesPerColumnFill: 'row',
			spaceBetween: 80,
			loop: false,
		}
	}
});

let singleProduct = new Swiper('.single-product__slider', {
	slidesPerView: 1,
	loop: true,

	thumbs: {
		swiper: {
			el: '.single-product__preview-slider',
			slidesPerView: 3,
			spaceBetween: 15,

			breakpoints: {
				480: {
					slidesPerView: 4,
				},
				1402: {
					slidesPerView: 6,
				},
			}
		}
	},
});