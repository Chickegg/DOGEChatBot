function changeText1() {
    let x = document.getElementById('text1');
    x.innerText = "모두들 코로나로 인해 많이 힘드시겠지만";
}
function changeText2() {
    let x = document.getElementById('text2');
    x.innerHTML = "각자 저마다의 방식으로"
}
function changeText3() {
    let x = document.querySelector('.output #text3');
    x.textContent = "코로나를 잘 이겨내 봅시도지💥"
}

let num = 0;
let a = document.getElementById('Num');
let doge = document.getElementById('doge_img');

function reduce() {
    if(num <= 10) {
    console.log(num);
    a.innerText = num++;
    } else {
        doge.src = "./images/doge2.jpg";
        a.innerText = "👏"
    }
}

