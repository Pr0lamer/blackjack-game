let minValue = 2;
let maxValue = 11;
let message = "";
let isAlive = true;
let hasBlackJack = false;

let firstCard = getRandomInRange(minValue, maxValue);
let secondCard = getRandomInRange(minValue, maxValue);
let sumOfCards = firstCard + secondCard;

let startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", ()=>{
    if (sumOfCards <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sumOfCards === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    console.log(message);
    
});

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

