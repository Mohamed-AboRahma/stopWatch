const startTimerButton = document.querySelector(
  ".buttonsControl button.startTimer"
);
const stopTimerButton = document.querySelector(
  ".buttonsControl button.stopTimer"
);
const resetTimerButton = document.querySelector(
  ".buttonsControl button.resetTimer"
);
let secondesText = document.querySelector(".counterDisplay .secondesText");
let minutesText = document.querySelector(".counterDisplay .minutesText");
let hoursText = document.querySelector(".counterDisplay .hoursText");
let secondsTimer = 0;
let minutesTimer = 0;
let hoursTimer = 0;
let TimerInterval;

function startTimer() {
  TimerInterval = setInterval(() => {
    secondsTimer++;
    secondsTimer < 10
      ? (secondesText.innerText = `0${secondsTimer}`)
      : (secondesText.innerText = `${secondsTimer}`);

    secondsTimer == 59
      ? minutesTimer < 10
        ? (minutesText.innerText = `0${++minutesTimer}`)
        : (minutesText.innerText = ++minutesTimer)
      : null;

    minutesTimer == 59
      ? hoursTimer < 10
        ? (hoursText.innerText = `0${++hoursTimer}`)
        : (hoursText.innerText = ++hoursTimer)
      : null;
    secondsTimer == 59 ? (secondsTimer = 0) : null;

    minutesTimer == 59 ? (minutesTimer = 0) : null;
  }, 1000);
}

function stopTimer() {
  clearInterval(TimerInterval);
}

function resetTimer() {
  (secondesText.innerText = "00"),
    (minutesText.innerText = "00"),
    (hoursText.innerText = "00");
  (hoursTimer = 0), (minutesTimer = 0), (secondsTimer = 0);
}

startTimerButton.addEventListener("click", (e) => {
  startTimer();
  startTimerButton.setAttribute("disabled", "true");
  stopTimerButton.removeAttribute("disabled");
});

stopTimerButton.addEventListener("click", () => {
  stopTimer();
  startTimerButton.removeAttribute("disabled");
  stopTimerButton.setAttribute("disabled", "true");
});

resetTimerButton.addEventListener("click", () => {
  clearInterval(TimerInterval);
  resetTimer();
  startTimerButton.removeAttribute("disabled");
  stopTimerButton.setAttribute("disabled", "true");
});
