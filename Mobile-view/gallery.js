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

let index = 0; // start at first image
const mainPicture = document.querySelector('.mainPicture');

// show initial image
mainPicture.src = images[index];

function nextImage() {
    index = (index + 1) % images.length; // forward
    mainPicture.src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length; // backward
    mainPicture.src = images[index];
}

// support desktop + mobile
button1.addEventListener('touchstart', nextImage);
button1.addEventListener('touch', nextImage);
button1.addEventListener('click', nextImage);
button2.addEventListener('touchstart', prevImage);
button2.addEventListener('touch', prevImage);
button2.addEventListener('click', prevImage);
