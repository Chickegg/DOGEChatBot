
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
        return alert("๋");
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
    icon: "๐ท",
    title: "์คํ์ด๋๋งจ: ํ์ปค๋ฐ",
    date: "2017.07.05",
    audience: "โญ 8.83"
};
let movie02 = {
    image: "./image/readyplayerone.jpg",
    icon: "๐ฎ",
    title:"๋ ๋ ํ๋ ์ด์ด ์",
    date: "2018.03.28",
    audience: "โญ 8.73"
};
let movie03 = {
    image: "./image/burning2.jpg",
    icon: "๐ฅ",
    title:"๋ฒ๋",
    date: "2018.05.17",
    audience: "โญ 7.81"
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
    name: "์ํ์",
    callNum: "010-1234-5678",
    img: "./image/UHS.jpg",
    time:"00:00"
}

let movies = [movie01, movie02, movie03];
let Contacts = [call01, call02, call03];


/// ์ฑ๋ด ๊ธฐ๋ฅ ๊ด๋ จ ๋ถ๋ถ

chatboticon.onclick = function() {
    chatBotIcon.style.display = "none";
    chatBotIconOn.style.visibility = "visible";
}
const chatBotIcon = document.getElementById('chatboticon');
const chatBotIconOn = document.getElementById('chatboticonOn');