
btnbtn.onclick = function movie(i) {
    i = count;
    if(i < movies.length) {
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
let movieIconOut = document.getElementById('movie_icon');
let movieTitleOut = document.getElementById('movie_title');
let moviedateOut = document.getElementById('movie_date');
let movieAudienceOut = document.getElementById('movie_audience');

let movie01 = {
    icon: "🕷",
    title: "스파이더맨: 홈커밍",
    date: "2017.07.05",
    audience: "⭐ 8.83"
};
let movie02 = {
    icon: "🎮",
    title:"레디 플레이어 원",
    date: "2018.03.28",
    audience: "⭐ 8.73"
};
let movie03 = {
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