text_input_click.onclick = function() { 
     // 입력한 text를 저장하는 부분
    let inputText = textInputTyping.value;
    textInputTyping.value = '';
    inputTextArr.push(inputText);

    // 자식 Element를 만들고 삽입하는 부분
    let newText = document.createElement("div"); // DOM객체 생성
    newText.setAttribute("id", "saybox"); // DOM 객체의 class값 지정
    textOutPut[0].appendChild(newText); // 자식 노드로 추가해줌
    newText.textContent = inputText;
    
    if(inputText === text[0]) {
        let newReverseText = "불 꺼드릴게요.";
        reverseBoxInput(newReverseText);

        let changeDarkMode = parentChangeCss(newReverseText);
        changeDarkMode.img.src = "./image/dark_mode_background.jpg";
        changeDarkMode.callimg.src = "./image/dark_mode_background.jpg";

        changeCss(newReverseText);
    }
    if(inputText === text[1]) {
        let newReverseText = "불 켜드릴게요."
        reverseBoxInput(newReverseText);

        let changeLightMode = parentChangeCss(newReverseText);
        changeLightMode.img.src = "./image/light_mode_background.jpg";
        changeLightMode.callimg.src = "./image/light_mode_background.jpg";

        changeCss(newReverseText);
    }
    if(inputText === text[2]) {
        let newReverseText = "저는 멍청하지 않아요😥"
        reverseBoxInput(newReverseText); 
        alert("나쁜말 금지❗"); 
    }
    if(!text.includes(inputText)) {
        let newReverseText = "도지?";
        reverseBoxInput(newReverseText);
    }
}

// 입력값을 받으면 출력값이 담길 DOM객체를 생성, 추가 시켜주는 함수
function reverseBoxInput(text) { 
    let newText = document.createElement("div");
    newText.setAttribute("id", "reversebox");
    textOutPut[0].appendChild(newText);

    return newText.textContent = text; 
}
// 부모 html파일에 접근하여 css를 변경하고 Day10의 img경로를 받는 함수
function parentChangeCss(text) {
    let parentLink = window.parent.document.getElementById("mode_css");
    let parentImg = window.parent.document.getElementById("nineDays_image");
    let parentCallImg = window.parent.document.getElementById("call_img");

    if(text === "불 켜드릴게요.") {
        parentLink.href = ("light_mode.css");
    } else parentLink.href = ("dark_mode.css");

    return {
        img : parentImg,
        callimg : parentCallImg
    }
}
// 현재 html파일에 접근하여 css를 변경하는 함수
function changeCss(text) {
    let link = document.getElementById("mode_css");
    let title = document.getElementById("chatbot_title");
    
    if(text === "불 켜드릴게요.") {
        link.href = ("light_mode_chatbot_style.css");
        title.textContent = "🌞";
        textInputClick.value = "🚀";
    } else {
        link.href = ("dark_mode_chatbot_style.css");
        title.textContent = "🌙";
        textInputClick.value = "⭐";
    }
}

const textOutPut = document.getElementsByClassName("text_output_border");
const textInputClick = document.getElementById("text_input_click");
let textInputTyping = document.getElementById("text_input_typing");

let text = ["불꺼줘", "불켜줘", "멍청한 강아지"];
let inputTextArr = []; // 입력값 저장부분.

