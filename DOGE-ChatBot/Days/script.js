
D.onclick = function movie(i) {
    i = count;
    if(i < 1) {
    ClassA.textContent = movies[i].title;
    ClassB.textContent = movies[i].date; 
    ClassC.textContent = movies[i].audience; 
    } else {
    // ClassA.textContent = movie02.title;
    // ClassB.textContent = movie02.date;
    ClassA.textContent = movies[i].title;
    ClassB.textContent = movies[i].date; 
    ClassC.textContent = movies[i].audience; 
    }
    console.log(count);
    count++;
};

let count = 0;
let ClassA = document.getElementById('A');
let ClassB = document.getElementById('B');
let ClassC = document.getElementById('C');

let movie01 = {
    title:"버닝",
    date: "2018.05.17",
    audience: "520,000명"
};
let movie02 = {
    title:"엽기적인 그녀",
    date: "2001.07.27",
    audience: "4,870,000명"
};
let movie03 = {
    title: "스파이더맨: 홈커밍",
    date: "2017.07.05",
    audience: "7,250,000명"
}
const movies = [movie01, movie02, movie03];
