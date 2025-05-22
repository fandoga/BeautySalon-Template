const menuLinks = document.querySelector('.menu_links');
const signUpButton = document.querySelector('.button');
const DropdownButton = document.querySelector('.dropdown_icon');
const DropdownMenu = document.querySelector('.dropdown_content');
const ServiceItems = document.querySelectorAll('.ServicesBlock_item');

let element;
const offset = 50;
let isDropdownOpen = false;
let elementPosition
let offsetPosition


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
    }
    if (Item.dataset.link) {
        switch (Item.dataset.link) {
            case 'SignUp':
                try {
                    window.location.href = 'https://n1174179.yclients.com/company/1077045/personal/menu?o=';
                } catch (e) {
                    console.error('Перенаправление не было осуществлено, но мы не унываем', e);
                }
                break;
            case 'Service_1':
                try {
                    window.location.href = 'https://n1174179.yclients.com/company/1077045/personal/select-services?o=s16187977';
                } catch (e) {
                    console.error('Перенаправление не было осуществлено, но мы не унываем', e);
                }
                break;
            case 'Service_2':
                try {
                    window.location.href = 'https://n1174179.yclients.com/company/1077045/personal/select-services?o=s16204036';
                } catch (e) {
                    console.error('Перенаправление не было осуществлено, но мы не унываем', e);
                }
                break;
            case 'Service_3':
                try {
                    window.location.href = 'https://n1174179.yclients.com/company/1077045/personal/select-services?o=s16204046';
                } catch (e) {
                    console.error('Перенаправление не было осуществлено, но мы не унываем', e);
                }
                break;
            default:
                break;
        }
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
            DropdownButton.classList.remove('open');
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

});
