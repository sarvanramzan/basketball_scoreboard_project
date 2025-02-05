// 2. variables - used to store data values for later use (Global Scope)
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let startTimerBtn = document.getElementById("start-timer-btn");
let stopTimerBtn = document.getElementById("stop-timer-btn");
let restartTimerBtn = document.getElementById("restart-timer-btn");

// 3. Event Listener - is a procedure or method executed when any event occurs like a "click event"
startTimerBtn.addEventListener("click", function() {
    // invoke function
    startTimer();
})

stopTimerBtn.addEventListener("click", function() {
    // invoke function
    stopTimer();
})

restartTimerBtn.addEventListener("click", function() {
    // invoke function
    resetTimer();
})

// 4. functions -  block of code designed to perform a particular task when invoked
function updateTimer() {
    // increment the seconds variable
    seconds++;
    // conditional statement
    if (seconds >= 60) {
        // reassign the "seconds" variable
        seconds = 0;
        // increment the minutes variable
        minutes++;
        // conditional statement
        if (minutes >= 60) {
            // reassign the "minutes" variable
            minutes = 0;
            // increment the hours variable
            hours++;
        }
    }
    // html dom
    document.getElementById('timer').textContent = 
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
        (seconds > 9 ? seconds : "0" + seconds);
}

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

export function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').textContent = "00:00:00";
}

