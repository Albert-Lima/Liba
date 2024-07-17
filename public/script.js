const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const boxImg = document.querySelector('.box_img');

let index = 0;
const totalSlides = boxImg.children.length;

function showSlide() {
    const width = boxImg.clientWidth;
    boxImg.style.transform = `translateX(${-index * width}px)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide();
}

function previousSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
}

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', previousSlide);

// Auto slide
let autoSlideInterval = setInterval(nextSlide, 3000); // Muda a cada 3 segundos

// Pausar ao passar o mouse
document.querySelector('.slider').addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

// Retomar ao remover o mouse
document.querySelector('.slider').addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(nextSlide, 3000);
});