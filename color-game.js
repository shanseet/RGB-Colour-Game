var redDisplay = document.getElementById("red");
var greenDisplay = document.getElementById("green");
var blueDisplay = document.getElementById("blue");
var colorDisplay = document.querySelector("h1");
var header = document.getElementById("header");
var info = document.getElementById("retry");
var playAgain = document.getElementById("replay");
var easyMode = document.getElementById("easyselect");
var hardMode = document.getElementById("hardselect");
var hardSquares = document.getElementById("container-hard");
var squares = document.getElementsByClassName("square");

var numSquares = 6;
var answerSquare, answerColor;

function randomRGB() {
    return Math.floor(Math.random()*256);
}

function reload() {
    info.classList.add("hide");
    answerSquare = Math.floor(Math.random()*numSquares);
    for (var i=0; i<numSquares; i++) {
        squares[i].classList.remove("hide");
        squares[i].style.backgroundColor = "rgb(" + randomRGB() + "," + randomRGB() + ", " + randomRGB() + ")";
    }
    console.log ("answer is " + answerSquare);
    answerColor = squares[answerSquare].style.backgroundColor;
    colorDisplay.textContent = answerColor;
    header.style.backgroundColor = "rgb(85,134,214)";
    playAgain.textContent = "NEW GAME";
    info.textContent = "Try Again";
}

reload();

for (var i=0; i<squares.length; i++) {
    squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor == answerColor) {
            for (var j=0; j<squares.length; j++) {
                squares[j].classList.remove("hide");
                squares[j].style.backgroundColor = answerColor;
            }
            header.style.backgroundColor = answerColor;
            info.classList.remove("hide");
            info.textContent = "Correct!";
            playAgain.textContent = "PLAY AGAIN";
        } else {
            if (info.textContent!= "Correct!") {
                this.classList.add("hide");
                info.classList.remove("hide");
            }
        }
    }); 
}

playAgain.addEventListener("click", reload);

easyMode.addEventListener("click", function(){
    hardMode.classList.remove("selected");
    easyMode.classList.add("selected");
    hardSquares.classList.add("hide");
    numSquares=3;
    reload();

})

hardMode.addEventListener("click", function(){
    easyMode.classList.remove("selected");
    hardMode.classList.add("selected");
    hardSquares.classList.remove("hide");
    numSquares=6;
    reload();
})