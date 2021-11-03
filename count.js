
let body, settings, session, counter, count, start, motivation
let series, reps, breakTime, seriesPlus, seriesMinus, repsPlus, repsMinus, breakTimePlus, breakTimeMinus
let seriesNum, repsNum, breakNum

body = document.querySelector("body")
settings = document.querySelector(".settings")
session = document.querySelector(".session")
start = document.querySelector(".start")
series = document.getElementById("series")
reps = document.getElementById("reps")
breakTime = document.getElementById("break")
seriesPlus = document.getElementById("plus-series")
seriesMinus = document.getElementById("minus-series")
repsPlus = document.getElementById("plus-reps")
repsMinus = document.getElementById("minus-reps")
breakTimePlus = document.getElementById("plus-break")
breakTimeMinus = document.getElementById("minus-break")


seriesPlus.onclick = () => {
    seriesNum = parseInt(series.innerHTML)
    series.innerHTML = seriesNum + 1
}

seriesMinus.onclick = () => {
    seriesNum = parseInt(series.innerHTML)
    series.innerHTML = seriesNum - 1
}

repsPlus.onclick = () => {
    repsNum = parseInt(reps.innerHTML)
    reps.innerHTML = repsNum + 1 
}

repsMinus.onclick = () => {
    repsNum = parseInt(reps.innerHTML)
    reps.innerHTML = repsNum - 1
}

breakTimePlus.onclick = () => {
    breakNum = parseInt(breakTime.innerHTML)
    breakTime.innerHTML = breakNum + 1 + "<br/>" + "min"
}

breakTimeMinus.onclick = () => {
    breakNum = parseInt(breakTime.innerHTML)
    breakTime.innerHTML = breakNum - 1 + "<br/>" + "min"
}

start.onclick = () => {
    settings.classList.add("inactive")
    session.classList.remove("inactive")
}


counter = document.querySelector(".counter")
count = parseInt(counter.innerHTML)
motivation = document.querySelector(".motivation")
seriesCounter = document.getElementById("series-counter")
seriesCount = parseInt(seriesCounter.innerHTML)


let runBreak = () => {
    // document.querySelector(".reps").classList.add("invisible")
    let minutes = 1
    let seconds = 20
    document.querySelector(".reps").innerHTML = '<h2>break timer</h2>' + '<div class="counter">' + minutes + '<span>: ' + seconds + '</span></div>'

    // while(minutes > 0 && seconds > 0) {
    
    let countDown = setInterval(() => {
        seconds = seconds - 1
        if (seconds == 0 && minutes == 0) {
            document.querySelector(".reps").innerHTML = '<h2>rep no.</h2>' + '<div class="counter">' + '1<span>/ 12</span>' + '</div>'
            motivation.innerHTML = "Back at it!"
            clearInterval(countDown)
        } else if (seconds == 0) {
            seconds = 59
            minutes = minutes - 1
            document.querySelector(".reps").innerHTML = '<h2>break timer</h2>' + '<div class="counter">' + minutes +' <span>: ' + seconds + '</span></div>'
        } else {
            document.querySelector(".reps").innerHTML = '<h2>break timer</h2>' + '<div class="counter">' + minutes +' <span>: ' + seconds + '</span></div>'
        }
    }, 1000);
    // }
}


session.onclick = () => {
    let counter = document.querySelector(".counter")
    count++
    if (count == 5) {
        motivation.innerHTML = "Halfway there!"
    } else if (count == 10) {
        motivation.innerHTML = "Only 2 to go!"
    } else if (count == 12) {
        motivation.innerHTML = "Good job, take a break"
        seriesCount++
        seriesCounter.innerHTML = seriesCount + "<span> / 3</span>"
        count = 1
        runBreak()
    }
    counter.innerHTML = count + "<span> / 12</span>"
}
