let counter = 0;

const images = [
  "./src/img/apple.png",
  "./src/img/cherry.png",
  "./src/img/king.png",
  "./src/img/orange.png"
];

const numberOfImages = images.length;

const showAttempts = document.querySelector(".counter");
const imgOne = document.querySelector(".img-one");
const imgTwo = document.querySelector(".img-two");
const imgThree = document.querySelector(".img-three");
const btnPlay = document.querySelector('.button-play');
const btnReset = document.querySelector('.button-reset');
const showTextWinner = document.querySelector('.text-winner');

function play() {
  counter++;

  showAttempts.innerHTML = counter;

  const randomNumberOne = Math.floor(Math.random() * numberOfImages);
  const randomNumberTwo = Math.floor(Math.random() * numberOfImages);
  const randomNumberThree = Math.floor(Math.random() * numberOfImages);

  imgOne.src = images[randomNumberOne];
  imgTwo.src = images[randomNumberTwo];
  imgThree.src = images[randomNumberThree];

  if (randomNumberOne === randomNumberTwo && randomNumberOne === randomNumberThree) {
    btnPlay.classList.add("display-none");
    btnReset.classList.remove("display-none");
    showTextWinner.classList.remove("display-none");
    confetti();
  }
}

btnPlay.addEventListener("click", () => play());
btnReset.addEventListener("click", () => window.location.reload());