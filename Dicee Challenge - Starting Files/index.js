var random = Math.floor(Math.random()*6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice"+random+".png");
var ran2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img2").setAttribute("src","images/dice"+ran2+".png");
if(random === ran2) document.querySelector("h1").textContent = "Draw!";
else if(random > ran2) document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
else document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
