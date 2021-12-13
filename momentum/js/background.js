const images = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgContainer = document.querySelector("#background");
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgContainer.appendChild(bgImage);
//appendChild() 가장 뒤에
//prependChild() 가장 앞에
