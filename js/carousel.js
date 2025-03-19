let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const carouselSlides = document.querySelector('.carousel-slides');

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
    //currentSlide = (currentSlide + 1) % slides;
    //updateSlider();
});

prevButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
    //currentSlide = (currentSlide - 1 + slides) % slides;
    //updateSlider();
});

// Автоперемикання кожні 5 секунд
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Початкове відображення
showSlide(currentSlide);
