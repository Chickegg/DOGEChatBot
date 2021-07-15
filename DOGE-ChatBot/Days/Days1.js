let tenMs = 0;
let s = 0;
let m = 0;

const startButton = document.getElementById("clickBtn");
const stopButton = document.getElementById('stopBtn');
const resetButton = document.getElementById('resetBtn');
const tenMillisecond = document.getElementById('tenMsec');
const second = document.getElementById('sec');
const min = document.getElementById('min');
let intervalId;

startButton.onclick = function() {
    clearInterval(intervalId);
    intervalId = setInterval(Timer, 10)
}
stopButton.onclick = function() {
    clearInterval(intervalId)
}
resetButton.onclick = function() {
    clearInterval(intervalId)
    tenMs = 0; s = 0; m = 0;
    tenMillisecond.textContent = "00"
    second.textContent = "00"
    min.textContent = "00"
}

function Timer() {
    tenMs++;

    if(tenMs > 99) {
        s++;
        tenMs = 0;
        tenMs.textContent = '00'
        if(s > 59) {
            m++;
            s = 0;
            s.textContent = '00'
        }
    }

    tenMillisecond.textContent = tenMs > 9 ? tenMs :'0' + tenMs;
    second.textContent = s > 9 ? s : '0' + s;
    min.textContent = m > 9 ? m : '0' + m;
}