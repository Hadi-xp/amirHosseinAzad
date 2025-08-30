const button1 = document.querySelector('.button1'); // next
const button2 = document.querySelector('.button2'); // prev

const images = [
    '../images/مراسم فارغ التحصیلی.jpg',
    '../images/مراسم فارغ التحصیلی2.jpg',
    '../images/مراسم فارغ التحصیلی3.jpg',
    '../images/مراسم فارغ التحصیلی4.jpg',
    '../images/مراسم فارغ التحصیلی5.jpg',
    '../images/مراسم فارغ التحصیلی6.jpg',
];

let index = 0;
const mainPicture = document.querySelector('.mainPicture');

// Always start at first image
mainPicture.src = images[index];

function nextImage() {
    index = (index + 1) % images.length;
    mainPicture.src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    mainPicture.src = images[index];
}

// Only use click (works on touch too)
button1.addEventListener('touchstart', nextImage);
button2.addEventListener('touchstart', prevImage);
