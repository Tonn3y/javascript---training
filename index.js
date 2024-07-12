let randomNumber1 = Math.floor (Math.random() * 6) + 1;
console.log(randomNumber1);
let randomdiceimage = "dice" + randomNumber1 + ".png"
let randomimagesource = "images/" + randomdiceimage
let image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomimagesource)

let randomnumber2 = Math.floor (Math.random() * 6) + 1;
let randomimagesource2 = "images/dice" + randomnumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2)

if (randomNumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "PLAYER ONE WINS"
}
else if (randomnumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = " PLAYER TWO WINS "
}
else {
    document.querySelector("h1").innerHTML = "DRAW"
}