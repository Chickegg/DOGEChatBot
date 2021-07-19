text_input_click.onclick = function() { 
    // 새로운 자식 element를 추가하는 부분
    let inputText = textInputTyping.value;
    textInputTyping.value = '';
    text.push(inputText);

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

}
let text = [];

const textOutPut = document.getElementsByClassName("text_output_border");
const textInputClick = document.getElementById("text_input_click");
let textInputTyping = document.getElementById("text_input_typing");
