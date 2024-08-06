
var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImag1="images/dice"+randomNumber1+".png";

var imga1 = document.querySelectorAll("img")[0];

imga1.setAttribute("src",randomImag1);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImag2="images/dice"+randomNumber2+".png";

var imga2 = document.querySelectorAll("img")[1];

imga2.setAttribute("src",randomImag2);

if(randomNumber1>randomNumber2){

    document.querySelector("h1").innerHTML= "🚩 Play 1 Wins!";
}
else if(randomNumber1<randomNumber2){

    document.querySelector("h1").innerHTML= "Player 2 Wins! 🚩";   
}
else{
    
    document.querySelector("h1").innerHTML="Draw";
}