const clickMeBtn = document.querySelector("#clickMe");
const page = document.querySelector("body");
const hexValue = document.querySelector("#hex-value");

let hexValues=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

clickMeBtn.addEventListener("click", changeHexColor);

function changeHexColor(){
    let hex='#';
    for(let i=0; i<6; i++){
        const colorIndex=Math.floor(Math.random()*hexValues.length);
        hex+=hexValues[colorIndex];
        // console.log(colorIndex);
        // console.log(hex);
    }
    hexValue.textContent=hex;
    page.style.backgroundColor = hex;
}