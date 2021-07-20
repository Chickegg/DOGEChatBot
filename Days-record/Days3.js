
btnbtn.onclick = function movie(i) {
    i = movieCount;
    if(i < movies.length) {
        
    movieImageOut.src = movies[i].image;
    movieIconOut.textContent = movies[i].icon;
    movieTitleOut.textContent = movies[i].title;
    moviedateOut.textContent = movies[i].date; 
    movieAudienceOut.textContent = movies[i].audience; 
    
    if(daysRecordLink.getAttribute("href") === "dark_mode.css") {
        movieIconImgOut.src= "./image/dark_mode_background.JPG";
    } else {
        movieIconImgOut.src= "./image/light_mode_background.JPG";
    }


    // callNameOut.textContent = "";
    // callNumOut.textContent = "";
    } else {
        return alert("끝");
    }
    console.log(movieCount);
    movieCount++;
};

callbtn.onclick = function call(i) {
    i = movieCount -1;
    setTimeout(() => {
    movieIconImgOut.src= Contacts[i].img;
    movieTitleOut.textContent = Contacts[i].name;
    moviedateOut.textContent = Contacts[i].callNum;
    movieAudienceOut.textContent = Contacts[i].time;
    // callNameOut.textContent = Contacts[i].name;
    // callNumOut.textContent = Contacts[i].callNum;
    }, 2000);
    console.log(i);
    callCount++;
};


let movieCount = 0;
const movieIconOut = document.getElementById('movie_icon');
const movieIconImgOut = document.getElementById("call_img");
const movieTitleOut = document.getElementById('movie_title');
const moviedateOut = document.getElementById('movie_date');
const movieAudienceOut = document.getElementById('movie_audience');
const movieImageOut = document.getElementById('nineDays_image');
const daysRecordLink = document.getElementById('mode_css');

let callCount = 0;
// const callNameOut = document.getElementById('call_name');
// const callNumOut = document.getElementById('call_number');


let movie01 = {
    image: "./image/spyderman2.jpg",
    icon: "🕷",
    title: "스파이더맨: 홈커밍",
    date: "2017.07.05",
    audience: "⭐ 8.83"
};
let movie02 = {
    image: "./image/readyplayerone.jpg",
    icon: "🎮",
    title:"레디 플레이어 원",
    date: "2018.03.28",
    audience: "⭐ 8.73"
};
let movie03 = {
    image: "./image/burning2.jpg",
    icon: "🔥",
    title:"버닝",
    date: "2018.05.17",
    audience: "⭐ 7.81"
};

let call01 = {
    name: "Tom Holland",
    callNum: "+442912345678",
    img: "./image/TomHolland2.jpg",
    time:"00:00"
}
let call02 = {
    name: "Mark Rylance",
    callNum: "(251)123-0001",
    img : "./image/MarkRylance.jpg",
    time:"00:00"
}
let call03 = {
    name: "엄홍식",
    callNum: "010-1234-5678",
    img: "./image/UHS.jpg",
    time:"00:00"
}

let movies = [movie01, movie02, movie03];
let Contacts = [call01, call02, call03];


/// 챗봇 기능 관련 부분

chatboticon.onclick = function() {
    chatBotIcon.style.display = "none";
    chatBotIconOn.style.visibility = "visible";
}
const chatBotIcon = document.getElementById('chatboticon');
const chatBotIconOn = document.getElementById('chatboticonOn');