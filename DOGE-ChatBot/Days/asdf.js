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

    console.log(inputText); 
    
    // let newDIV = document.createElement("p"); // DOM객체 생성
    // newDIV.setAttribute("class","say_box"); // DOM객체의 class값을 정해줌.
    // newDIV.style.backgroundColor = "green"; //style값을 지정

    // textOutPut[0].appendChild(newDIV); //자식 노드로 추가해줌.


    
    // newDIV.innerHTML = textInputTyping;

}
let text = [];

const textOutPut = document.getElementsByClassName("text_output_border");
const textInputClick = document.getElementById("text_input_click");
let textInputTyping = document.getElementById("text_input_typing");
