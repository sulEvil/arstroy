/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
 import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
 import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.partners__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.promo__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффеты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			


			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 24,
				
				},
				819.99: {
					slidesPerView: 2,
					spaceBetween: 24,
					
				},
				1920: {
					slidesPerView: 2,
					spaceBetween: 24,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.partners__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.partners__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффеты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			


			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 24,
				
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 24,
				
				},
				819.99: {
					slidesPerView: 2,
					spaceBetween: 24,
					
				},
				919.9: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
				1920: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.ourObjects__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.ourObjects__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay, Pagination],
			observer: true,
			observeParents: true,

			autoHeight: false,
			speed: 800,
			centeredSlides: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			slidesPerView: 2,
			spaceBetween: 67,
			preloadImages: true,
			centeredSlides: true,
			//lazy: true,
			// Эффеты
			effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			pagination: {
				el: ".ourObjects__pagination",
				type: "fraction",
			  },
			navigation: {
				nextEl: ".ourObjects__button-next",
				prevEl: ".ourObjects__button-prev",
			  },


			breakpoints: {
				320: {		
					spaceBetween: 24,	
					slidesPerView: 1,
				},
				640:{

					slidesPerView: 2,
				},
				1200:{
					slidesPerView: 2,
				},
				1920: {			

				},
			},
			
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});