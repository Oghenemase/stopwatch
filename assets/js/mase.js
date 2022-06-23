const stopwatchtimer = document.querySelector(".stopwatch-timer")
const stopwatchStartBtn = document.querySelector('.stopwatch-btn-start')
const stopwatchStopBtn = document.querySelector('.stopwatch-btn-stop')
const stopwatchResetBtn = document.querySelector('.stopwatch-btn-reset')

let stopwatchMilli = 0
let stopwatchSeconds = 0
let stopwatchMinutes = 0
let interval;

function runStopwatch() {
    stopwatchMilli += 100

    if(stopwatchMilli > 999) {
        stopwatchSeconds++
        stopwatchMilli = 0
    }

    if(stopwatchSeconds > 59) {
        stopwatchMinutes++
        stopwatchSeconds = 0
    }
    console.log(stopwatchMinutes, stopwatchSeconds, stopwatchMilli)
    stopwatchtimer.innerHTML = stopwatchMintues + ":" + stopwatchSeconds + ":" + stopwatchMilli
} 

const startStopwatch = () => {
    clearInterval(interval)
    interval = setInterval(runStopwatch, 100)
}

stopwatchStartBtn.addEventListener("click", startStopwatch)

const stopStopWatch = () => {
    clearInterval(interval)
}
stopwatchStopBtn.addEventListener("click" , stopStopWatch)

const resetStopWatch = () => {

    stopwatchMilli = 0
    stopwatchSeconds = 0
    stopwatchMintues = 0

    stopwatchtimer.innerHTML = '00:00:00'
    clearInterval(interval)
}
stopwatchResetBtn.addEventListener("click", resetStopWatch)
