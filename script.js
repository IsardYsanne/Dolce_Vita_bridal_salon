// alert("hello");
//"use strict"
if (isMobile.any()){
	let menuParents = document.querySelectorAll('.menu-page__parent a');
	for(let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener("click", function(e) {
			menuParent.parentElement.classList.toggle('_active');
			e.preventDefault();
		});
	}
}else{
		let menuParents = document.querySelectorAll('.menu-page__parent');
		for(let index = 0; index < menuParents.length; index++){
		const menuParent = menuParents[index];
		//пробегаемся по всем парентам и вешаем на них событие, при наведении мыши допол инфа появляется
		menuParent.addEventListener("mouseenter", function(e){
			menuParent.classList.add('_active');
		});
		//мыши убираем - исчезает
		menuParent.addEventListener("mouseleave", function(e){
			menuParent.classList.remove('_active');
		});
	}
}



let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');

menuPageBurger.addEventListener("click", function(e){
	//при клике добавляем класс актив, т.е. активируем меню
	menuPageBurger.classList.toggle('_active');
	_slideToggle(menuPageBody);
});


//пишем для открытия поиска
let searchSelect = document.querySelector('.search-page__title');
let categorySearch = document.querySelector('.categories-search');

searchSelect.addEventListener("click", function(e){
	searchSelect.classList.toggle('_active');
	_slideToggle(categorySearch);
});

//делаем отбор категорий ("искать среди" меняем на "выбрано")

let categoryCheckbox = document.querySelectorAll('.categories-search__checkbox');

for (let index = 0; index < categoryCheckbox.length; index++){
	const categoryCheck = categoryCheckbox[index];
	categoryCheck.addEventListener("change", function(e) {
		categoryCheck.classList.toggle('_active');

		let categoryActiveCheck = document.querySelectorAll('.categories-search__checkbox._active');

		if (categoryActiveCheck.length > 0){
			searchSelect.classList.add('_category');
			let searchQuantity = searchSelect.querySelector('.search-page__quantity');
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + categoryActiveCheck.length;
		} else {
			searchSelect.classList.remove('_category');
		}
	});
}


const priceSlider = document.querySelector('.price-filter__slider');

noUiSlider.create(priceSlider, {
    start: [0, 150000],
	//tooltips: true,
	//убираем цифры после запятой
	tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
	connect: true,
    range: {
        'min': [0],
        'max': [150000]
    }
});

const priceStart = document.getElementById('price-start');
const priceEnd = document.getElementById('price-end');

priceStart.addEventListener('change', setPriceValues);
priceEnd.addEventListener('change', setPriceValues);

function setPriceValues() {
	let priceStartValue;
	let priceEndValue;
	if (priceStart.value != '') {
		priceStartValue = priceStart.value;
	}
	if (priceEnd.value != '') {
		priceEndValue = priceEnd.value;
	}
	priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
}
if (isMobile.any()){
	const filterTitle= document.querySelector('.filter__title');
	filterTitle.addEventListener('click', function(e) {
		filterTitle.classList.toggle('_active');
		_slideToggle(filterTitle.nextElementSibling);
	});
}

//spoller
// $(document).ready(function() {
// 	$('.filter__body').click(function(event) {
// 		if($('._spollers').hasClass('_spollers)){
// 			$('._spoller').not($(this)).removeClass('active');
// 			$('.section-filter__body').not($(this).next()).slideUp(300);
// 		}
// 		$(this).toggleClass('active').next().slideToggle(300);
// 	});
// });
