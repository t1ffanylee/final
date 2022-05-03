var slider = document.getElementById("sliding");
var faceOne = document.getElementById("faceOne");
var faceTwo = document.getElementById("faceTwo");
var faceThree = document.getElementById("faceThree");
var faceFour = document.getElementById("faceFour");
var faceFive = document.getElementById("faceFive");
var faceSix = document.getElementById("faceSix");
var text = document.getElementById("slidertext");
slider.oninput = function () {
  if (this.value == 0) {
    faceOne.classList.remove("hidden");
    faceTwo.classList.add("hidden");
    faceThree.classList.add("hidden");
    faceFour.classList.add("hidden");
    faceFive.classList.add("hidden");
    faceSix.classList.add("hidden");
    text.textContent = "yikes!";
  } else if (this.value == 10) {
    faceOne.classList.add("hidden");
    faceTwo.classList.remove("hidden");
    faceThree.classList.add("hidden");
    faceFour.classList.add("hidden");
    faceFive.classList.add("hidden");
    faceSix.classList.add("hidden");
    text.textContent = "so prettyyy";
  } else if (this.value == 20) {
    faceOne.classList.add("hidden");
    faceTwo.classList.add("hidden");
    faceThree.classList.remove("hidden");
    faceFour.classList.add("hidden");
    faceFive.classList.add("hidden");
    faceSix.classList.add("hidden");
    text.textContent = "yes! stunning";
  } else if (this.value == 30) {
    faceOne.classList.add("hidden");
    faceTwo.classList.add("hidden");
    faceThree.classList.add("hidden");
    faceFour.classList.remove("hidden");
    faceFive.classList.add("hidden");
    faceSix.classList.add("hidden");
    text.textContent = "flawless!";
  } else if (this.value == 40) {
    faceOne.classList.add("hidden");
    faceTwo.classList.add("hidden");
    faceThree.classList.add("hidden");
    faceFour.classList.add("hidden");
    faceFive.classList.remove("hidden");
    faceSix.classList.add("hidden");
    text.textContent = "almost perfect";
  } else if (this.value == 50) {
    faceOne.classList.add("hidden");
    faceTwo.classList.add("hidden");
    faceThree.classList.add("hidden");
    faceFour.classList.add("hidden");
    faceFive.classList.add("hidden");
    faceSix.classList.remove("hidden");
    text.textContent = "PERFECT!!!";
  }
};

var hate1;

document.addEventListener("DOMContentLoaded", function(){
hate1 = document.getElementById("hate1").style.visibility = "hidden";
hate2 = document.getElementById("hate2").style.visibility = "hidden";
hate3 = document.getElementById("hate3").style.visibility = "hidden";
hate4 = document.getElementById("hate4").style.visibility = "hidden";
hate5 = document.getElementById("hate5").style.visibility = "hidden";
hate6 = document.getElementById("hate6").style.visibility = "hidden";
hate7 = document.getElementById("hate7").style.visibility = "hidden";
hate8 = document.getElementById("hate8").style.visibility = "hidden";

setTimeout(Comment1, 2150);
setTimeout(Comment2, 3280);
setTimeout(Comment3, 4190);
setTimeout(Comment4, 5378);
setTimeout(Comment5, 6749);
setTimeout(Comment6, 7990);
setTimeout(Comment7, 8394);
setTimeout(Comment8, 9102);
});

function Comment1(){
  document.getElementById("hate1").style.visibility = "visible";
}
function Comment2(){
  document.getElementById("hate2").style.visibility = "visible";
}function Comment3(){
  document.getElementById("hate3").style.visibility = "visible";
}function Comment4(){
  document.getElementById("hate4").style.visibility = "visible";
}function Comment5(){
  document.getElementById("hate5").style.visibility = "visible";
}function Comment6(){
  document.getElementById("hate6").style.visibility = "visible";
}function Comment7(){
  document.getElementById("hate7").style.visibility = "visible";
}function Comment8(){
  document.getElementById("hate8").style.visibility = "visible";
}
