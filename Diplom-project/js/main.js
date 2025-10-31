document.addEventListener('DOMContentLoaded', () => {

    /* ------------------------------
       1. Бургер-меню
    ------------------------------ */
    const burger = document.querySelector('.header__burger');
    const navList = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__link');

    if (burger && navList) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            navList.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                navList.classList.remove('active');
            });
        });
    }

    /* ------------------------------
       2. Инициализация MixItUp
    ------------------------------ */
    const mixerContainer = document.querySelector('.products__list');
    let mixer;
    if (mixerContainer) {
        mixer = mixitup(mixerContainer, {
            selectors: { target: '.mix' },
            animation: { duration: 300 }
        });
    }

    /* ------------------------------
       3. DROPDOWN-МЕНЮ: фильтрация
    ------------------------------ */
    const btn = document.getElementById('filters-toggle');
    const menu = document.getElementById('filters-menu');

    if (btn && menu && mixer) {
        // открыть/закрыть фильтр
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('dropdown__menu--active');
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
        });

        // клик вне меню
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                menu.classList.remove('dropdown__menu--active');
                btn.setAttribute('aria-expanded', 'false');
            }
        });

        // фильтрация
        menu.querySelectorAll('.dropdown__item').forEach(item => {
            item.addEventListener('click', () => {
                const filterValue = item.dataset.filter;
                mixer.filter(filterValue === 'all' ? 'all' : filterValue);
                btn.querySelector('.dropdown__label').textContent = item.textContent;
                menu.classList.remove('dropdown__menu--active');
                btn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ------------------------------
       4. DROPDOWN-МЕНЮ: сортировка
    ------------------------------ */
    const sortBtn = document.getElementById('sort-toggle');
    const sortMenu = document.getElementById('sort-menu');

    if (sortBtn && sortMenu && mixer) {
        // открыть/закрыть меню сортировки
        sortBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sortMenu.classList.toggle('dropdown__menu--active');
        });

        // закрытие при клике вне
        document.addEventListener('click', (e) => {
            if (!sortMenu.contains(e.target) && !sortBtn.contains(e.target)) {
                sortMenu.classList.remove('dropdown__menu--active');
            }
        });

        // сортировка при выборе пункта
        sortMenu.querySelectorAll('.dropdown__item').forEach(item => {
            item.addEventListener('click', () => {
                const sortValue = item.dataset.sort;
                if (sortValue === 'default') mixer.sort('default');
                else mixer.sort(sortValue);
                sortBtn.querySelector('.dropdown__label').textContent = item.textContent;
                sortMenu.classList.remove('dropdown__menu--active');
            });
        });
    }

    /* ------------------------------
       5. Слайдер карточек товара
    ------------------------------ */
    if (document.querySelector('.sellers__slider')) {
        new Swiper('.sellers__slider', {
            spaceBetween: 41,
            slidesPerView: 4,
            navigation: {
                nextEl: '.sellers__next',
                prevEl: '.sellers__prev',
            },
            breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1450: { slidesPerView: 3, spaceBetween: 30 },
                1800: { slidesPerView: 4, spaceBetween: 41 },
            },
        });
    }

    /* ------------------------------
       6. Слайдер промо (Air Max)
    ------------------------------ */
    if (document.querySelector('.promo-air-swiper')) {
        new Swiper('.promo-air-swiper', {
            direction: 'vertical',
            loop: true,
            speed: 800,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            pagination: {
                el: '.promo-air__pagination',
                clickable: true,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
        });
    }

});