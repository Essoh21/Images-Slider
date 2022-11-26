import style from './style.css';
import html from './index.html';
import allSlides from './allSlides';
import showSlide from './showSlide';
import hideSlide from './hideSlide';
import { moveLeft, moveRight } from './moves';
import allDots from './allDots';

const firstSlideIndex = 0;
const lastSlideIndex = 3;
let isLastSlide = false;
let isFirstSlide = false;
let currentSlideIndex = firstSlideIndex;

allSlides.forEach((slide) => {
    slide.style.display = 'none';
})
allSlides[0].style.display = 'flex';
dislplayDotOfIndex(firstSlideIndex);
moveRight.addEventListener('click', displayNextSlide)
moveLeft.addEventListener('click', displayPreviousSlide);

allDots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        hideSlide(currentSlideIndex, allSlides);
        showSlide(dotIndex, allSlides);
        removeDisplayOfDotOfIndex(currentSlideIndex);
        dislplayDotOfIndex(dotIndex);
        currentSlideIndex = dotIndex;
    })
})

setInterval(displayNextSlide, 10000);

function displayNextSlide() {
    if (currentSlideIndex == lastSlideIndex) {
        isLastSlide = true;
    }
    if (isLastSlide) {
        hideLastSlide();
        removeDisplayOfDotOfIndex(lastSlideIndex);
        showFirstSlide();
        dislplayDotOfIndex(firstSlideIndex);
        currentSlideIndex = firstSlideIndex;
        isLastSlide = false;
    } else {
        hideCurrentSlide();
        removeDisplayOfDotOfIndex(currentSlideIndex);
        showNextSlide();
        increaseCurrentSlideIndex();
        dislplayDotOfIndex(currentSlideIndex);
    }
}

function displayPreviousSlide() {
    if (currentSlideIndex == firstSlideIndex) {
        isFirstSlide = true
    }
    if (isFirstSlide) {
        hideCurrentSlide();
        removeDisplayOfDotOfIndex(currentSlideIndex);
        showLastSlide();
        dislplayDotOfIndex(lastSlideIndex);
        isFirstSlide = false;
        currentSlideIndex = lastSlideIndex;
    } else {
        hideCurrentSlide();
        removeDisplayOfDotOfIndex(currentSlideIndex);
        showPreviousSlide();
        decreaseCurrentSlideIndex();
        dislplayDotOfIndex(currentSlideIndex);
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

function dislplayDotOfIndex(dotIndex, dots = allDots) {
    allDots[dotIndex].style.backgroundColor = '#223';
}

function removeDisplayOfDotOfIndex(dotIndex, dots = allDots) {
    allDots[dotIndex].style.backgroundColor = '#999';
}