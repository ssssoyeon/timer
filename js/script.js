const timeDisplay = document.querySelector('.time')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')

let timer = null;
let seconds = 0


function updateTime() {

    const hour = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    console.log(hour, mins, secs)

    timeDisplay.textContent = `${String(hour).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

}

updateTime()

function startTimer() {

    if (!timer) {

        timer = setInterval(function () {
            seconds++
            updateTime()
        }, 1000)

    }

}

function stopTimer() {

    clearInterval(timer)
    timer = null

}

function resetTimer() {

    timer = null
    seconds = 0
    updateTime()

}

startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)