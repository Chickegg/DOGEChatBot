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

const nameButton = document.getElementById("nameBtn");
const nameResetButton = document.getElementById("nameResetBtn");
const nameOutput = document.getElementById("name");




let namelist = ['0', 'm', 'i', 'n', '🙈', '🙉'];
let L = namelist.length;
let i = 0;
let text = '';



nameButton.onclick = function nameBtnClick() {
    if(i >= 0 && i < L) {
        text += namelist[i];
        nameOutput.textContent = text;
    } else if(i === L) {
        // text = "저는" + text + "이라고 합니다😎";
        nameOutput.textContent = text;
        alert(text);
    } 
    i++;
}
nameResetButton.onclick = function nameResetBtnClick() {
    text = '';
    nameOutput.textContent = '텅텅...';
    i = 0;
    alert('잘 가 나의 모발들아..')
}

