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
    // if(inputText === "아니요") {
    //     return
    // }
    if(!text.includes(inputText)) {
        // let newReverseText = "도지?";
        // reverseBoxInput(newReverseText);
        text_check(inputText);
        return
    }
}

// 입력값을 받으면 출력값이 담길 DOM객체를 생성, 추가 시켜주는 함수
function reverseBoxInput(text) { 
    i++;
    let newText = document.createElement("div");
    newText.setAttribute("id", "reversebox");
    newText.setAttribute("class", `reversebox${i}`);
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
let i = 0;



////////////////  대화를 저장하기 위한 json /////////////////
let json = [
    {
        "question" : "안녕",
        "answer" : "반가워요"
    },
    {
        "question" : "이름이 뭐야?",
        "answer" : "제 이름은 도지에요"
    },
    {
        "question" : "바보",
        "answer" : "저는 바보가 아니에요😥"
    }
]

let question = ""; // 사용자의 질문을 임시 저장할 변수
let answer = ""; // 사용자의 대답을 임시 저장할 변수

let key = 0; // 키 값을 이용하여 말을 배우는 상황인지 아닌지 판별합니다.

function text_check(text) {
    let newReverseText = "";
    reverseBoxInput(newReverseText);
    let reply = document.getElementsByClassName(`reversebox${i}`)[0];
    let value = text; // 입력값

    for(let j = 0; j < json.length; j++) {
        if(value === json[j].question) {
            console.log(i, j, json[j].answer, reply, key);
            reply.textContent = json[j].answer;
            return
        } 
    }

    if(key === 0) {
        let newReverseText = "말을 가르쳐 주실래요?(네, 아니요)";
        reply.textContent = newReverseText;
        console.log(i);
        question = value; //사용자의 질문을 미리저장
        key = 1;
    return
    }

    function push_json(reply) {
        json.push({question : `${question}`, answer : `${answer}`});
        console.log(reply);
        newReverseText = "말을 배웠도지!";
        reply.textContent = newReverseText;
        key = 0;
        return
    }

    if(key === 1) {
        if(value === "네") {
            reply.textContent = "대답을 입력해주세요!";
            key = 2; // key 값을 2로 만들어, 대답을 입력받는 조건으로 변경
        }
        else {
            reply.textContent = "다음번엔 가르쳐 주세요!"
            // text.setAttribute("class", "reversebox2");
            key = 0;
        }
        return
    }

    if(key === 2) {
        answer = value; // 전역변수 answer값에 사용자의 입력을 저장
        push_json(reply); // json 데이터에 값을 추가하는 함수
        console.log(json);
    }
}
let text = ["불꺼줘", "불켜줘", "멍청한 강아지"];
let inputTextArr = []; // 입력값 저장부분.

