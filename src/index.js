import style from './style.css';
import html from './index.html';
import allSlides from './allSlides';
import showSlide from './showSlide';
import hideSlide from './hideSlide';
import { moveLeft, moveRight } from './moves'

const firstSlideIndex = 0;
const lastSlideIndex = 3;
let isLastSlide = false;
let isFirstSlide = false;
let currentSlideIndex = firstSlideIndex;

allSlides.forEach((slide) => {
    slide.style.display = 'none';
})
allSlides[0].style.display = 'flex';
moveRight.addEventListener('click', displayNextSlide)
moveLeft.addEventListener('click', displayPreviousSlide);

function displayNextSlide() {
    if (currentSlideIndex == lastSlideIndex) {
        isLastSlide = true;
    }
    if (isLastSlide) {
        hideLastSlide();
        showFirstSlide();
        currentSlideIndex = firstSlideIndex;
        isLastSlide = false;
    } else {
        hideCurrentSlide();
        showNextSlide();
        increaseCurrentSlideIndex();
        if (currentSlideIndex == lastSlideIndex) {
            currentSlideIndex = firstSlideIndex;
            isLastSlide = true;
        }
    }
}

function displayPreviousSlide() {
    if (currentSlideIndex == firstSlideIndex) {
        isFirstSlide = true
    }
    if (isFirstSlide) {
        hideCurrentSlide();
        showLastSlide();
        isFirstSlide = false;
        currentSlideIndex = lastSlideIndex;
    } else {
        hideCurrentSlide();
        showPreviousSlide();
        decreaseCurrentSlideIndex();
    }

}

function hideCurrentSlide() {
    hideSlide(currentSlideIndex, allSlides);
}

function hideLastSlide() {
    hideSlide(3, allSlides)
}

function showFirstSlide() {
    showSlide(firstSlideIndex, allSlides);
}

function showLastSlide() {
    showSlide(lastSlideIndex, allSlides);
}
function showNextSlide() {
    showSlide(currentSlideIndex + 1, allSlides);
}

function showPreviousSlide() {
    showSlide(currentSlideIndex - 1, allSlides);
}
function increaseCurrentSlideIndex() {
    currentSlideIndex += 1;
}

function decreaseCurrentSlideIndex() {
    currentSlideIndex -= 1;
}