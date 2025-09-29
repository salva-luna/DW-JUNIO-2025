let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("my-slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
let index = 0;
const slideWidth = slides[0].clientWidth;

function moveSlide(dir) {
    index += dir;

    if (index < 0) {
        index = slides.length - 1; // vuelve al último
    } else if (index >= slides.length) {
        index = 0; // vuelve al primero
    }

    track.style.transform = `translateX(${-index * slideWidth}px)`;
}
