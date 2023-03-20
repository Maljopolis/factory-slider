const left = document.getElementById('left');
const right = document.getElementById('right');
const slide4 = document.getElementsByName("slide4")

let count = 0;
const images = [];
let lount = 0;
const limages = []

images[0]="slider-image-1.jpg";
images[1]="slider-image-2.jpg";
images[2]="slider-image-3.jpg";
images[3]="slider-image-4.jpg";

limages[0]="slider-image-7.jpg";
limages[1]="slider-image-5.jpg";
limages[2]="slider-image-6.jpg";
limages[3]="slider-image-8.png";


left.addEventListener('click',slideLeft);
right.addEventListener('click',slideRight);


function initial(){
  document.slide1.src = images[count];
  document.slide2.src = images[count+1];
  document.slide3.src = images[count+2];
  document.slide4.src = images[count+3];
}

function linitial(){
    document.lide1.src = limages[lount];
    document.lide2.src = limages[lount+1];
    document.lide3.src = limages[lount+2];
    document.lide4.src = limages[lount+3];
}


function slideLeft(){
  let first = images.shift();
  images.push(first);
  let lfirst = limages.shift();
  limages.push(lfirst);
  
  linitial()
  initial()
}

function slideRight(){
  let first = images.pop();
  images.unshift(first);
  let lfirst = limages.pop();
  limages.unshift(lfirst);
  

  linitial()
  initial();
}

window.onload = linitial(),initial();


