const images = ['0.jpg','1.png','2.png'];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage);