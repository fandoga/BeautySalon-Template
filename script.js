const prevActive = '<svg id="prev" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="prev" d="M0.499903 10L10.4999 20L11.8999 18.6L3.2999 10L11.8999 1.4L10.4999 0L0.499903 10Z" fill="white" /> </svg>';
const prevUnactive = '<svg id="prev" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="prev" d="M0.499903 10L10.4999 20L11.8999 18.6L3.2999 10L11.8999 1.4L10.4999 0L0.499903 10Z" fill="#cda582" /> </svg>';

const nextActive = '<svg id="next" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="next" d="M0.499903 10L10.4999 20L11.8999 18.6L3.2999 10L11.8999 1.4L10.4999 0L0.499903 10Z" fill="white" /> </svg>';
const nextUnactive = '<svg id="next" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="next" d="M0.499903 10L10.4999 20L11.8999 18.6L3.2999 10L11.8999 1.4L10.4999 0L0.499903 10Z" fill="#cda582" /> </svg>';


const menuLinks = document.querySelector('.menu_links');
const signUpButton = document.querySelector('.button');
const DropdownButton = document.querySelector('.dropdown_icon');
const DropdownMenu = document.querySelector('.dropdown_content');
const ServiceItems = document.querySelectorAll('.ServicesBlock_item');
const ReviewsItems = document.querySelectorAll('.reviews_item');
const Sliders = document.querySelector('.sliders');
const SliderButtons = document.querySelectorAll('.slider');
const ServicesTrack = document.querySelector('.services_track');
const ServicesItems = document.querySelectorAll('.services_item');
const btnNext = document.querySelector('.right_arrow_wrapper');
const btnPrev = document.querySelector('.left_arrow_wrapper');

let element;
const offset = 50;
let isDropdownOpen = false;
let elementPosition
let offsetPosition
let pos = 1;
let currentSlide = 0;
let itemWidth = ServicesItems[0].offsetWidth + 24;
let visibleSlides
if (window.matchMedia("(max-width: 820px)").matches) {
    console.log(213)
    visibleSlides = 1
} else if (window.matchMedia("(max-width: 1380px)").matches) {
    visibleSlides = 3
} else {
    visibleSlides = 4
}

document.addEventListener('click', (event) => {
    Event = event.target
    console.log(Event.id);
    Item = ServiceItems[Event.id - 1]
    if (Event.dataset.target) {
        event.preventDefault()
        element = document.querySelector(Event.dataset.target);
        elementPosition = element.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        return;
    } else if (Event.closest('.nav_icon_link')) {
        Event = Event.closest('.nav_icon_link');
        element = document.querySelector(Event.dataset.target);
        elementPosition = element.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        return;
    } else if (Event.closest('a')) {
        Event = Event.closest('a')
        element = document.querySelector(Event.dataset.target);
        elementPosition = element.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        return;
    }

})

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back_to_top");

    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            backToTop.style.bottom = "-20px";
        } else {
            backToTop.style.bottom = "-200px";
        }

        if (window.pageYOffset > 1110 && isDropdownOpen) {
            console.log('close');
            DropdownMenu.classList.remove('open');
            isDropdownOpen = false;
        }
    });

    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    if (DropdownButton && DropdownMenu) {
        DropdownButton.addEventListener('click', function () {
            if (!isDropdownOpen) {
                DropdownMenu.classList.add('open');
                DropdownButton.classList.add('open');
                isDropdownOpen = true;
            } else {
                DropdownMenu.classList.remove('open');
                DropdownButton.classList.remove('open');
                isDropdownOpen = false;
            }
            console.log(window.pageYOffset);
        });
    }

    Sliders.addEventListener('click', function () {
        Event = event.target
        console.log(Event);
        if (Event.id === 'prev' || Event.id === 'next') {
            ReviewsItems.forEach(item => {
                console.log(Event);
                if (Event.id === 'next') {
                    if (item.classList.contains('pos0')) {
                        item.classList.remove('pos0');
                        item.classList.add('pos-1');
                    } else if (item.classList.contains('pos1')) {
                        item.classList.remove('pos1');
                        item.classList.add('pos0');
                        pos++;
                    } else if (item.classList.contains('pos2')) {
                        item.classList.remove('pos2');
                        item.classList.add('pos1');
                    } else if (item.classList.contains('pos-1')) {
                        item.classList.remove('pos-1');
                        item.classList.add('pos-2');
                    }
                } else if (Event.id === 'prev') {
                    if (item.classList.contains('pos0')) {
                        item.classList.remove('pos0');
                        item.classList.add('pos1');
                    } else if (item.classList.contains('pos-1')) {
                        item.classList.remove('pos-1');
                        item.classList.add('pos0');
                        pos--;
                    } else if (item.classList.contains('pos1')) {
                        item.classList.remove('pos1');
                        item.classList.add('pos2');
                    } else if (item.classList.contains('pos-2')) {
                        item.classList.remove('pos-2');
                        item.classList.add('pos-1');
                    }
                }
            });

            switch (pos) {
                case 3:
                    console.log(SliderButtons[1].innerHTML);
                    SliderButtons[1].disabled = true;

                    SliderButtons[1].innerHTML = nextUnactive;

                    SliderButtons[1].classList.toggle('sl_unactive');
                    SliderButtons[1].classList.toggle('sl_active');
                    break;
                case 2:
                    SliderButtons[0].disabled = false;

                    SliderButtons[0].innerHTML = prevActive;
                    if (SliderButtons[0].classList.contains('sl_unactive')) {
                        SliderButtons[0].classList.toggle('sl_unactive');
                        SliderButtons[0].classList.toggle('sl_active');
                    } else {
                        SliderButtons[1].disabled = false;
                        SliderButtons[1].innerHTML = nextActive;
                        SliderButtons[1].classList.toggle('sl_unactive');
                        SliderButtons[1].classList.toggle('sl_active');
                    }
                    break;
                case 1:
                    SliderButtons[0].disabled = true;

                    SliderButtons[0].innerHTML = prevUnactive;

                    SliderButtons[0].classList.toggle('sl_unactive');
                    SliderButtons[0].classList.toggle('sl_active');
                    break;
                default:
                    break;
            }
        }
    });

    btnNext.addEventListener('click', () => {
        if (currentSlide < ServicesItems.length - visibleSlides) {
            console.log(visibleSlides);
            currentSlide++;
            ServicesTrack.style.transform = `translateX(-${itemWidth * currentSlide}px)`;
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            ServicesTrack.style.transform = `translateX(-${itemWidth * currentSlide}px)`;
        }
    });

});