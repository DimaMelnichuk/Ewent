/***************** Alert-close ********************/
document.querySelectorAll('.alert-boxe__close').forEach((item) =>
	item.addEventListener('click', () => {
		const parent = item.parentNode.parentElement;
		parent.classList.add("alert--close");
	})
)

/***************** Header-search ********************/
let searchIcon = document.querySelector('.header__search-icon');
let searchBox = document.querySelector('.search');
let searchClose = document.querySelector('.search__icon');
searchIcon.addEventListener("click", function (e) {
	searchBox.classList.toggle('active');
});
searchClose.addEventListener("click", function (e) {
	searchBox.classList.remove('active');
});
/***************** Menu-btn ********************/
let menu_burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.menu');
let menu_lock = document.querySelector('body');
menu_burger.addEventListener("click", function (e) {
	menu.classList.toggle('active');
	menu_burger.classList.toggle('active');
	menu_lock.classList.toggle('lock');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.menu__burger, .menu')) {
		menu.classList.remove('active');
		menu_burger.classList.remove('active');
		menu_lock.classList.remove('lock');
	}
	
});

/***************** WebP ********************/
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
});

/***************** loaded ********************/
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('loaded');
}

/***************** ibg adaptive inline bg ********************/
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}		
	}
}
ibg();
/*$(function(){
	$(window).scroll(function() {
   var scroll = $(window).scrollTop();

   if (scroll >= 20) {
     $('.header').addClass('fixed');
     $('.header__inner').css({
       "height": "60px",
     });
   } else {
     $('.header').removeClass('fixed');
     $('.header__inner').css({
       "height": "80px",
     });
   }
 	});
});*/

window.onscroll = function() {headerFixed()};
var header = document.querySelector(".header");
var headerContainer = document.querySelector(".header__container");
var sticky = header.offsetTop;

function headerFixed() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
    headerContainer.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    headerContainer.classList.remove("fixed");
  }
}
/* $(function(){

	$('.tabs__title-item').click(function(e){
		e.preventDefault();

		$('.tabs__title-item').removeClass('tabs__title-item--active');
		$('.tabs__content-item').removeClass('tabs__content-item--active');
		
		$(this).addClass('tabs__content-item--active');
		$(this).addClass('tabs__title-item--active');
		$($(this).attr('href')).addClass('tabs__content-item--active');
	});

	$('.tabs__title-item:first').click();

}); */


document.querySelectorAll('.tabs__title-item').forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');

		document.querySelectorAll('.tabs__title-item').forEach(
			(child) => child.classList.remove('tabs__title-item--active')
		);
		document.querySelectorAll('.tabs__content-item').forEach(
			(child) => child.classList.remove('tabs__content-item--active')
		);

		item.classList.add('tabs__title-item--active');
		document.getElementById(id).classList.add('tabs__content-item--active');
	})
);


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
			slidesPerGroup: 1,
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
/* $(function(){


	if($('.scroll-up').length){
		$(".scroll-up").on('click', function() {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
				}, 1000);
	
		});
	}

	$(window).on('scroll', function() {
		if($('.header').length){
			var windowpos = $(window).scrollTop();
			var scrollLink = $('.scroll-up');
			if (windowpos >= 110) {
				scrollLink.addClass('scroll-up--active');
			} else {
				scrollLink.removeClass('scroll-up--active');
			}
		}
	});


}); */

const scrollUp = document.querySelector('.scroll-up');
const offset = 300;
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// onScroll
window.addEventListener('scroll', () => {
	if (getTop() > offset) {
		scrollUp.classList.add('scroll-up--active');
	} else {
		scrollUp.classList.remove('scroll-up--active');
	}
});

//click
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});
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


document.querySelectorAll('.accordion__item-title').forEach((item) =>
	item.addEventListener('click', () => {
		item.parentNode.classList.toggle('accordion__item--active');
	})
)

/* document.querySelectorAll('.accordion__item-title').forEach((item) =>
	item.addEventListener('click', () => {
		const parent = item.parentNode;

		if (parent.classList.contains('accordion__item--active')) {
			parent.classList.remove('accordion__item--active');
		} else {
			document
				.querySelectorAll('.accordion__item')
				.forEach((child) => child.classList.remove('accordion__item--active'))

			parent.classList.add('accordion__item--active');
		}

	})
) */
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = "max"; //Для MobileFirst поменять на min

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 } //Для MobileFirst поменять
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());

/*
let block = document.querySelector('.click');
block.addEventListener("click", function (e) {
	alert('Все ок ;)');
});
*/

/*
//Объявляем переменные
const parent_original = document.querySelector('.content__blocks_city');
const parent = document.querySelector('.content__column_river');
const item = document.querySelector('.content__block_item');

//Слушаем изменение размера экрана
window.addEventListener('resize', move);

//Функция
function move(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 992) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[2]);
			item.classList.add('done');
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item, parent_original.children[2]);
			item.classList.remove('done');
		}
	}
}

//Вызываем функцию
move();

*/
