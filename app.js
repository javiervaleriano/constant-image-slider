// Array of paints
const paint = [
    'The Starry Night by Van Gogh',
    'The Persistence of Memory by Salvador Dalí',
    'Water Lilies by Monet',
    'The Last Supper by Da Vinci',
    'Guernica by Pablo Picasso'
];


// ***** SELECT ELEMENTS FROM DOCUMENT *****
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const artistText = document.querySelector('h2');

// Reference variable
let index = 0;


// ***** EVENT LISTENERS *****
window.addEventListener('keyup', function (e) {
    if (e.keyCode === 37) {
        index--;
        goBackImg();
    } else if (e.keyCode === 39) {
        index++;
        advanceImg();
    }
    
    controlImgs();
    
    showNamePaint();
});


prevBtn.addEventListener('click', function () {
    index--;
    
    if (index >= 0) {
        goBackImg();
    }
    
    controlImgs();
    
    showNamePaint();
});

nextBtn.addEventListener('click', function () {
    index++;
    
    if (index < slides.length) {
        advanceImg();
    }
    
    controlImgs();
    
    showNamePaint();
});


// Control the behavior when the slider reaches the edge of images
function controlImgs() {
    if (index >= slides.length) {
        index = 0;
        slides.forEach(sld => {
            sld.style.transform = `translateX(0%)`;
            showNamePaint();
        });
    } else if (index < 0) {
        index = slides.length-1;
        slides.forEach(sld => {
            sld.style.transform = `translateX(${(slides.length-1) * -100}%)`;
            showNamePaint();
        });
    }
}

function advanceImg() {
    slides.forEach(sld => {
        sld.style.transform = `translateX(${index * -100}%)`;
    });
}

function goBackImg() {
    slides.forEach(sld => {
        sld.style.transform = `translateX(${index * -100}%)`;
    });
}

function showNamePaint() {
    artistText.textContent = paint[index];
}
showNamePaint();