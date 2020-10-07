/* $(function(){


	$(".accordion__item-title").click(function(event){
		$(this).toggleClass("accordion__item-title--active");
		$(this).next(".accordion__item-content").slideToggle(200);
	});


	$(".accordion__item-title").click(function(event){
		if($(".accordion__item-title").hasClass("accordion__item-title--active")){
		  $(".accordion__item-title").not($(this)).removeClass("accordion__item-title--active");
		  $(".accordion__item-content").not($(this).next()).slideUp(300);
		}
		$(this).toggleClass("accordion__item-title--active").next().slideToggle(300);
	});

}); */


/*document.querySelectorAll('.accordion__item-title').forEach((item) =>
	item.addEventListener('click', () => {
		item.parentNode.classList.toggle('accordion__item--active');
	})
)*/

document.querySelectorAll('.schedule__icon').forEach((item) =>
	item.addEventListener('click', () => {
		const parent = item.parentNode;

		if (parent.classList.contains('schedule__content--active')) {
			parent.classList.remove('schedule__content--active');
		} else {
			document
				.querySelectorAll('.schedule__icon__item')
				.forEach((child) => child.classList.remove('schedule__content--active'))

			parent.classList.add('schedule__content--active');
		}

	})
)