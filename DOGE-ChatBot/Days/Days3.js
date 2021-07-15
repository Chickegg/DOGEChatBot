
btnbtn.onclick = function movie(i) {
    i = count;
    if(i < movies.length) {
    movieImageOut.src = movies[i].image;
    movieIconOut.textContent = movies[i].icon;
    movieTitleOut.textContent = movies[i].title;
    moviedateOut.textContent = movies[i].date; 
    movieAudienceOut.textContent = movies[i].audience; 
    } else {
        return alert("끝");
    }
    console.log(count);
    count++;
};

let count = 0;
const movieIconOut = document.getElementById('movie_icon');
const movieTitleOut = document.getElementById('movie_title');
const moviedateOut = document.getElementById('movie_date');
const movieAudienceOut = document.getElementById('movie_audience');
const movieImageOut = document.getElementById('nineDays_image');
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

const movies = [movie01, movie02, movie03];

/* <h1>🎥 🎬</h1>
<h3 id ="A">Title</h3>
<h3 id ="B">date</h3>
<h3 id ="C">audience</h3>
<button id = "D">Rank1</button> */