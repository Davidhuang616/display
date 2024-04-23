let numberDisplay = document.getElementById('numberDisplay');
let numberImage = document.getElementById('numberImage');
let changeNumberButton = document.getElementById('changeNumberButton');
let circle = document.querySelector('.circle');
let number = 0;
let timer = null;

let numberImages = [
    '0.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png'
];

window.addEventListener('keydown', function(event) {
  if (event.code === 'Space' && timer === null) {
    circle.classList.remove('pause');
    circle.classList.add('rotate');
    timer = setInterval(function() {
      number = (number + 1) % 5;
      numberImage.src = numberImages[number];
    }, 1000);
  }
});

window.addEventListener('keyup', function(event) {
  if (event.code === 'Space') {
    circle.classList.add('pause');
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }
});
