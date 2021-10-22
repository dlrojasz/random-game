const images = new Array();
images[0] = "./src/img/apple.png";
images[1] = "./src/img/cherry.png";
images[2] = "./src/img/king.png";
images[3] = "./src/img/orange.png";

let counter = 0;

function play() {
  counter++;
  document.querySelector(".counter").innerHTML = counter;
  const randomNumberOne = Math.floor(Math.random() * 4);
  const randomNumberTwo = Math.floor(Math.random() * 4);
  const randomNumberThree = Math.floor(Math.random() * 4);
  document.querySelector(".img-one").src = images[randomNumberOne];
  document.querySelector(".img-two").src = images[randomNumberTwo];
  document.querySelector(".img-three").src = images[randomNumberThree];
  if (randomNumberOne === randomNumberTwo && randomNumberOne === randomNumberThree) {
    document.querySelector('.button-play').disabled = true;
    document.querySelector('.button-reset').disabled = false;
    document.querySelector('#button-play').classList.replace("button-play" ,"button-play-disabled");
    document.querySelector('#button-reset').classList.replace("button-reset", "button-reset-enabled");
    document.querySelector('.text-winner').classList.remove("display-none");
    confetti();
  }
}