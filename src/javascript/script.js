const timeEl = document.getElementById("timer")
const markslist = document.getElementById("marks-list")
let intervalid = 0
let timer = 0
let marks = []
const formatTime = (time) => {
    const hours = Math.floor(time/360000)
    const minutes = Math.floor(time/360000) / 6000
    const seconds = Math.floor(time/6000) / 100
    const hundresths = time % 100

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundresths.toString().padStart(2, '0')}`
}