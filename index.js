var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageDice = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomImageDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);