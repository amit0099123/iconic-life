var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	centeredSlides: true,
	autoplay: {
		delay: 90000,
		disableOnInteraction: false
	},
	loop: true,
	slidesPerView: "2",
	coverflowEffect: {
		rotate: 0,
		stretch: 30,
		depth: 100,
		modifier: 5,
		slideShadows: true
	},
		navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next"
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	}
});