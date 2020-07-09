/* why the function doesn't work? */
function randomDicee() {
  var r = Math.random();
  r = Math.floor(r*6)+1;
  // alert("in function");
  return r;
}

var randomNum1 = randomDicee();
// alert("working!"+randomNum1);
var randomDiceImg1 = "images/dice"+randomNum1+".png";
document.querySelector("img.img1").setAttribute("src",randomDiceImg1);

var randomNum2 = randomDicee();
var randomDiceImg2 = "images/dice"+randomNum2+".png";
document.querySelector("img.img2").setAttribute("src",randomDiceImg2);

if (randomNum1>randomNum2) {
  document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNum1<randomNum2){
  document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector(".container h1").innerHTML = "Draw!"
}
