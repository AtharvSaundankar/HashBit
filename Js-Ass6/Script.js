let intervalId;
let start;
let timeElapsed = 0;
let isRunning = false;

const display = document.getElementById("timer");
const startBtn = document.getElementById("startButton");
const pauseBtn = document.getElementById("pauseButton");
const stopBtn = document.getElementById("stopButton");

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);

function start() {
    if (!isRunning) {
        isRunning = true;
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
        start = Date.now() - timeElapsed;
        intervalId = setInterval(updateDisplay, 1000);
    }
}

function pause() {
    if (isRunning) {
        isRunning = false;
        clearInterval(intervalId);
        pauseBtn.textContent = "Resume";
    } else {
        isRunning = true;
        pauseBtn.textContent = "Pause";
        start();
    }
}

function stop() {
    clearInterval(intervalId);
    isRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
    timeElapsed = 0;
    display.textContent = "00:00:00";
}

function updateDisplay() {
    const now = Date.now();
    timeElapsed = now - start;
    const hrs = Math.floor(timeElapsed / 3600000);
    const mins = Math.floor((timeElapsed % 3600000) / 60000);
    const secs = Math.floor((timeElapsed % 60000) / 1000);
    display.textContent = format(hrs) + ":" + format(mins) + ":" + format(secs);
}

function format(unit) {
    return unit < 10 ? "0" + unit : unit;
}
