// ***** SELECT ELEMENTS FROM DOCUMENT *****
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const artistText = document.querySelector('h2');


// Dynamically positions slides next to each other no matter how many there are
slides.forEach((slide, i) => {
    slide.style.left = `${i * 100}%`;
});

// Reference variable
let index = 0;


// ***** EVENT LISTENERS *****
window.addEventListener('keyup', function (e) {
    if (e.keyCode === 37) {
        index--;
    } else if (e.keyCode === 39) {
        index++;
    }
    
    controlImgs();
    
    showNamePaint();
});


prevBtn.addEventListener('click', function () {
    index--;
    
    controlImgs();
});

nextBtn.addEventListener('click', function () {
    index++;
    
    controlImgs();
});


// ***** FUNCTIONS *****
// Control the behavior when the slider reaches the edge of images
function controlImgs() {
    if (index === slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length-1;
    }

    slides.forEach(slide => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
    
    showNamePaint();
}

function showNamePaint() {
    const images = document.querySelectorAll('.image');
    artistText.textContent = images[index].alt;
}
showNamePaint();