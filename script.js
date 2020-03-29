const navigationLinks = document.getElementById('header__menu'),
    portfolioImageTag = document.getElementById('portfolio__tags'),
    hamburgerNavigationLinks = document.querySelector('.hamburger__navigation'),
    scrollToTop = document.getElementsByClassName('scrollToTop')[0],
    burgerMenu = document.querySelector('.hamburger'),
    imageBordered = document.getElementsByClassName('portfolio_image')[0],
    formButton = document.getElementsByClassName('form__submit')[0],
    modalButton = document.getElementsByClassName('modal__button')[0],
    modal = document.getElementsByClassName('callback__form__modal')[0],
    modalContent = document.getElementsByClassName('modal__content')[0],
    subjectInfo = document.getElementsByClassName('subject__info')[0],
    descriptionInfo = document.getElementsByClassName('textarea__info')[0];

navigationLinks.addEventListener('click', (event) => {
    if(event.target.classList.contains('navigation__link')){
        navigationLinks.querySelectorAll('a').forEach(item => item.classList.remove('navigation__active'));
        event.target.classList.add('navigation__active');   
    }
});

document.addEventListener('scroll', scrollScrin);

function scrollScrin(event) {
    const cursorPosition = window.scrollY;
    document.querySelectorAll('body section').forEach((item) => {
        if (item.offsetTop <= cursorPosition && (item.offsetTop + item.offsetHeight) > cursorPosition) {
            document.querySelectorAll('#header__menu a').forEach((a) => {
                a.classList.remove('navigation__active');
                if (item.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('navigation__active');
                }
            })
        }
    });
}

document.getElementsByClassName('mobile__vertical')[0].addEventListener('click', () => {
    event.target.classList.toggle('hidden');
}); 

document.getElementsByClassName('mobile__horizontal')[0].addEventListener('click', (event) => {
    event.target.classList.toggle('hidden');
}); 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slider__section');
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

portfolioImageTag.addEventListener('click', (event) => {

    sortPortfolioImage();

    if(event.target.classList.contains('tag')){
        portfolioImageTag.querySelectorAll('li').forEach(item => item.classList.remove('portfolio_tags-list-active'));
        event.target.classList.add('portfolio_tags-list-active');
    }
});

const sortPortfolioImage = () => {
    const image = [
        'assets/img/portfolio/Image3.png',
        'assets/img/portfolio/Image2.png',
        'assets/img/portfolio/Image1.png',
        'assets/img/portfolio/Image4.png',
        'assets/img/portfolio/Image5.png',
        'assets/img/portfolio/Image6.png',
        'assets/img/portfolio/Image7.png',
        'assets/img/portfolio/Image8.png',
        'assets/img/portfolio/Image9.png',
        'assets/img/portfolio/Image10.png',
        'assets/img/portfolio/Image11.png',
        'assets/img/portfolio/Image12.png'
    ];
    const newImage = image.sort(() => Math.random() - 0.5);
    document.getElementsByClassName('portfolio_image')[0].innerHTML = newImage.map(img => `<div class="portfolio_image-slide"><img src=${img} alt="image" class="image"></div>`).join('');
}

imageBordered.addEventListener('click', (event) => {
    if(event.target.classList.contains('image')) {
        imageBordered.querySelectorAll('img').forEach(item => item.classList.remove('image__border'));
        event.target.classList.add('image__border');
    }
})

formButton.addEventListener('click', (event) => {
    event.preventDefault();

    let name = document.getElementsByClassName('form__name')[0],
        nameUser = document.querySelectorAll('form input')[0],
        emailUser = document.querySelectorAll('form input')[1],
        email = document.getElementsByClassName('form__email')[0];

        nameUser.classList.remove('bordered');
        emailUser.classList.remove('bordered');

    if(name.value === ''){
        alert("Enter your correct name (Required)");
        nameUser.classList.add('bordered');
        return;
    }

    if(email.value === ''){
        alert("Enter your correct e-mail (Required)");
        emailUser.classList.add('bordered');
        return;
    }
        
    let subject = subjectInfo.value === '' ? "Without subject" : `Subject: ${subjectInfo.value}` ;
    let description = descriptionInfo.value === '' ? "Without description" : `Description: ${descriptionInfo.value}`;
    
    modalContent.innerHTML = `
        <p class="modal__title">The letter was sent</p>
        <p class="modal__subject">${subject}</p>
        <p class="modal__description">${description}</p>
    `
    modal.classList.add('open');
});
    
modalButton.addEventListener('click', (event) => {
    modal.classList.remove('open');
    subjectInfo.value = '';
    descriptionInfo.value = '';
    document.getElementsByClassName('form__name')[0].value = '';
    document.getElementsByClassName('form__email')[0].value = '';
});

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('hamburger__menu_active');
    hamburgerMenuVisible();
    scrollScrinHamburger(event);
});

function hamburgerMenuVisible() {
    if(burgerMenu.classList.contains('hamburger__menu_active')) {
        document.getElementsByClassName('hamburger__navigation')[0].classList.add('open');
        document.getElementsByClassName('hamburger__navigation_layer')[0].classList.add('open')
    } else {
        document.getElementsByClassName('hamburger__navigation')[0].classList.remove('open');
        document.getElementsByClassName('hamburger__navigation_layer')[0].classList.remove('open')
    }
}

document.addEventListener('scroll', scrollScrinHamburger);

function scrollScrinHamburger(event) {
    const cursorPosition = window.scrollY;
    document.querySelectorAll('body section').forEach((item) => {
        if (item.offsetTop <= cursorPosition && (item.offsetTop + item.offsetHeight) > cursorPosition) {
            document.querySelectorAll('.hamburger__navigation a').forEach((a) => {
                a.classList.remove('navigation__active');
                if (item.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('navigation__active');
                }
            })
        }
    });
}

hamburgerNavigationLinks.addEventListener('click', (event) => {
    if(event.target.classList.contains('hamburger__navigation_link')){
        hamburgerNavigationLinks.querySelectorAll('a').forEach(item => item.classList.remove('navigation__active'));
        event.target.classList.add('navigation__active');   
    }
});
