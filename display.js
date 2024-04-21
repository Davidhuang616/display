let numberDisplay = document.getElementById('numberDisplay');
let numberImage = document.getElementById('numberImage');
let changeNumberButton = document.getElementById('changeNumberButton');
let circle = document.querySelector('.circle');
let number = 0;
let timer;

let numberImages = [
    '0.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png'
];

changeNumberButton.addEventListener('mouseover', function() {
  circle.classList.remove('pause'); // Add this line
  circle.classList.add('rotate');
  timer = setInterval(function() {
      number = (number + 1) % 5;
      numberImage.src = numberImages[number];
  }, 1000);
});

changeNumberButton.addEventListener('mouseout', function() {
  circle.classList.add('pause');
  clearInterval(timer);
});