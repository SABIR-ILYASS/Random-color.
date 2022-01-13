const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
    const randomColor = getRandomColor();
    const randomColor2 = getRandomColor();
    color.textContent = randomColor;

    document.body.style.backgroundColor = randomColor;
    btn.style.backgroundColor = '#'+ (randomColor.substring(1)).split("").reverse().join("");
    document.getElementById("container").style.color = randomColor2;
});


function getRandomColor(){
    let str="#";
    var numbers = [];
    for (let i=0; i<6 ; i++){
        str += colors[Math.floor(Math.random() * 16)];
    }
    return str;

}