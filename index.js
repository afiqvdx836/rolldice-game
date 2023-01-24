var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageDice = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomImageDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageDice2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomImageDice2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

