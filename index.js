var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
console.log(randomNumber1 );

var Picture1 = document.querySelectorAll("img")[0]
var Picture2 = document.querySelectorAll("img")[1]


if (randomNumber1 === 1){
    Picture1.setAttribute("src", "./images/dice1.png")
}
else if (randomNumber1 === 2){
    Picture1.setAttribute("src", "./images/dice2.png")
}
else if (randomNumber1 === 3){
    Picture1.setAttribute("src", "./images/dice3.png")
}
else if (randomNumber1 === 4){
    Picture1.setAttribute("src", "./images/dice4.png")
}
else if (randomNumber1 === 5){
    Picture1.setAttribute("src", "./images/dice5.png")
}
else if (randomNumber1 === 6){
    Picture1.setAttribute("src", "./images/dice6.png")
}

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
console.log(randomNumber2 );

if (randomNumber2 === 1){
    Picture2.setAttribute("src", "./images/dice1.png")
}
else if (randomNumber2 === 2){
    Picture2.setAttribute("src", "./images/dice2.png")
}
else if (randomNumber2 === 3){
    Picture2.setAttribute("src", "./images/dice3.png")
}
else if (randomNumber2 === 4){
    Picture2.setAttribute("src", "./images/dice4.png")
}
else if (randomNumber2 === 5){
    Picture2.setAttribute("src", "./images/dice5.png")
}
else if (randomNumber2 === 6){
    Picture2.setAttribute("src", "./images/dice6.png")
}


 
if( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🏆"
}
else if( randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆"
}
else{
    document.querySelector("h1").innerHTML = "draw..! 🟰"
}