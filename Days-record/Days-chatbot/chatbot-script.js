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

    if(inputText === "멍청한 강아지") {
        let newText = document.createElement("div"); // DOM객체 생성
        newText.setAttribute("id", "reversebox"); // DOM 객체의 class값 지정
    
        textOutPut[0].appendChild(newText); // 자식 노드로 추가해줌
        let newReverseText = "저는 멍청하지 않아요😥"
        newText.textContent = newReverseText;

        alert("나쁜말 금지❗"); 
        console.log(newReverseText);
    }
    if(inputText === "불켜줘") {
        let newText = document.createElement("div"); // DOM객체 생성
        newText.setAttribute("id", "reversebox");
        textOutPut[0].appendChild(newText); // 자식 노드로 추가해줌

        let newReverseText = "불 켜드릴게요."
        newText.textContent = newReverseText;
        // 부모 html의 css파일을 바꿈.
        let parentLink = window.parent.document.getElementById("mode_css");
        parentLink.href = ("light_mode.css");

        let parentImg = window.parent.document.getElementById("nineDays_image");
        let parentCallIng = window.parent.document.getElementById("call_img");
        parentImg.src = "./image/light_mode_background.jpg";
        parentCallIng.src = "./image/light_mode_background.jpg";
    }
    if(inputText === "불꺼줘") {
        let newText = document.createElement("div"); // DOM객체 생성
        newText.setAttribute("id", "reversebox");
        textOutPut[0].appendChild(newText); // 자식 노드로 추가해줌

        let newReverseText = "불 꺼드릴게요."
        newText.textContent = newReverseText;

        let parentLink = window.parent.document.getElementById("mode_css");
        parentLink.href = ("dark_mode.css");

        let parentImg = window.parent.document.getElementById("nineDays_image");
        let parentCallIng = window.parent.document.getElementById("call_img");
        parentImg.src = "./image/dark_mode_background.jpg";
        parentCallIng.src = "./image/dark_mode_background.jpg";
    }
    if(text.includes(inputText) === false) {
        let newText = document.createElement("div"); // DOM객체 생성
        newText.setAttribute("id", "reversebox");
        textOutPut[0].appendChild(newText); // 자식 노드로 추가해줌

        let newReverseText = "도지?";
        newText.textContent = newReverseText;
    }
    console.log(text.includes(inputText));
}
let text = ["불꺼줘", "불켜줘", "멍청한 강아지"];
let inputTextArr = [];

const textOutPut = document.getElementsByClassName("text_output_border");
const textInputClick = document.getElementById("text_input_click");
let textInputTyping = document.getElementById("text_input_typing");
