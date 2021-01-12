'use strict';

var disableScroll = function disableScroll() {
    var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.toggle('scroll-lock');
    document.body.style.paddingRight = paddingOffset;
};

var burger = document.querySelector('.menu-icon').addEventListener('click', function () {
    var _this = this;

    var menu = document.querySelector('.menu');
    this.classList.toggle('menu-icon__active');
    menu.classList.toggle('menu__active');
    disableScroll();

    var links = document.querySelectorAll('.menu__link').forEach(function (element) {
        element.onclick = function () {
            menu.classList.toggle('menu__active');
            _this.classList.toggle('menu-icon__active');
            disableScroll();
        };
    });
});

var form = document.querySelector('.form__button').addEventListener('click', function (e) {
    e.preventDefault();
    createSuccessModal();
});

var createSuccessModal = function createSuccessModal(modal, bg) {

    modal = document.createElement('div');
    modal.className = 'success modal__active';
    modal.insertAdjacentHTML('afterbegin', '\n            <h2 class="success__title">Form submitted successfully</h2>\n            <p class="success__subtitle">We will call you back shortly</p>\n            <button class="success__exit">close</button>\n    ');
    disableScroll();

    bg = document.createElement('div');
    bg.className = 'modal__bg';

    document.body.append(modal);
    document.body.append(bg);

    bg.addEventListener('click', function () {
        document.body.removeChild(modal);
        document.body.removeChild(bg);
        modal.classList.remove('modal__active');
    });
    var close = document.querySelector('.success__exit').onclick = function () {
        document.body.removeChild(modal);
        document.body.removeChild(bg);
        modal.classList.remove('modal__active');
        disableScroll();
    };
};

$('.feedback__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 621,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

AOS.init();