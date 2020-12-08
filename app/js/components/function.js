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