const clickMeBtn = document.querySelector("#clickMe");
const page = document.querySelector("body");

page.style.backgroundColor = "pink";
let colors=["violet", "blue", "sky", "green", "yellow", "orange", "red"];

clickMeBtn.addEventListener("click", changeColor);

function changeColor(){
    const colorIndex=parseInt(Math.random()*colors.length);
    page.style.backgroundColor = colors[colorIndex];
}