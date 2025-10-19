
// -------------------Слайдар карточек товара
new Swiper('.sellers__slider', {

    spaceBetween: 41,
    slidesPerView: 4,

    navigation: {
        nextEl: '.sellers__next',
        prevEl: '.sellers__prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1450: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 41,
        },
    },
});