const min = document.getElementById("min");
const sec = document.getElementById("sec");
const mili = document.getElementById("mili");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 00;
let miliseconds = 00;
let minutes = 00;

let interval;

startBtn.onclick = () => {
  clearInterval(interval); //Use clearInterval() to stop the time:
  interval = setInterval(init, 10); //The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
};

stopBtn.onclick = () => {
  clearInterval(interval); //Use clearInterval() to stop the time:
};

resetBtn.onclick = () => {
  clearInterval(interval); //Use clearInterval() to stop the time:
  miliseconds = "00";
  seconds = "00";
  minutes = "00";
  min.innerHTML = minutes;
  mili.innerHTML = miliseconds;
  sec.innerHTML = seconds;
};

function init() {
  miliseconds++;

  if (miliseconds <= 9) {
    mili.innerHTML = "0" + miliseconds;
  }

  if (miliseconds > 9) {
    mili.innerHTML = miliseconds;
  }

  if (miliseconds > 99) {
    seconds++;
    sec.innerHTML = "0" + seconds;
    miliseconds = 0;
    mili.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    sec.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    min.innerHTML = "0" + minutes;
    seconds = 0;
    sec.innerHTML = "0" + seconds;
    miliseconds = 0;
    mili.innerHTML = "0" + miliseconds;
  }
  if (minutes > 9) {
    min.innerHTML = minutes;
  }
}
