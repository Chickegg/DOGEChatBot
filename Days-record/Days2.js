const nameButton = document.getElementById("nameBtn");
const nameResetButton = document.getElementById("nameResetBtn");
const nameOutput = document.getElementById("name");

let namelist = ['π', '0', 'm', 'i', 'n', 'π'];
let L = namelist.length;
let i = 0;
let text = '';

nameButton.onclick = function nameBtnClick() {
    if(i >= 0 && i < L) {
        text += namelist[i];
        nameOutput.textContent = text;
    } else if(i === L) {
        nameOutput.textContent = text;
        alert(text);
    } 
    i++;
}
nameResetButton.onclick = function nameResetBtnClick() {
    text = '';
    nameOutput.textContent = 'νν...';
    i = 0;
    alert('λΉμ°μ!')
}
