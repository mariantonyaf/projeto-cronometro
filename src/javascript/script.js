const timerEl = document.getElementById("timer")
const markslist = document.getElementById("marks-list")
let intervalid = 0
let timer = 0
let marks = []

const formattimerr = (timer) => {
    const hours = Math.floor(timer/360000)
    const minutes = Math.floor((timer % 360000) / 6000)
    const seconds = Math.floor((timer % 6000) / 100)
    const hundresths = timer % 100

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundresths.toString().padStart(2, '0')}`
}

const toggletimer = () => {
    const button = document.getElementById("power")
    const action = document.getAttribute("action")

    clearInterval(intervalid)

    if(action == 'star' || action == 'continue'){
        intervalid = setInterval(() => {
            timer += 1
            settimer(timer)
        }, 10)
        button.setAttribute("action", "pause")
        button.innerHTML = "<i class="fa-solid fa-pause"></i>"
    } else if(action == 'pause'){
        button.setAttribute("action","continue")
        button.innerHTML = "<i class="fa-solid fa-play"></i>"
    }
}

const settimer = (timerr) => {
    timerEl.innerText = formattimerr(timer)
}

document.getElementById("power").addEventListener("click", toggletimer)