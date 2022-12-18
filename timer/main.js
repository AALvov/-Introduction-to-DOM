

let number = document.getElementById("input__number");
let button = document.getElementById("button");
let time = document.getElementById("time");

let seconds = 0;
let timer;

function buttonCLick() {
  clearInterval(timer);
  seconds = number.value;
  timer = setInterval(timerBegin, 1000);
}

function timerBegin() {
  time.textContent = seconds--;
  if (seconds < 0) {
    clearInterval(timer);
  }
}

button.addEventListener('click', buttonCLick);
