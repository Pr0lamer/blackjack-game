let minValue = 2;
let maxValue = 11;
let message = "";
let isAlive = true;
let hasBlackJack = false;

let firstCard = getRandomInRange(minValue, maxValue);
let secondCard = getRandomInRange(minValue, maxValue);
let cardsArray = [firstCard, secondCard];
let anotherCard;
let sumOfCards = firstCard + secondCard;

let startBtn = document.getElementById("start-btn");
let newCardBtn = document.querySelector("#new-card-btn");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
function startGame(){
    renderGame();
}

function renderGame(){
    sumEl.textContent = `Sum: ${sumOfCards}`;
    cardsEl.textContent = `Cards: ${cardsArray[0]} ${cardsArray[1]}`;
    if (sumOfCards <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sumOfCards === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    anotherCard = getRandomInRange(minValue, maxValue);
    sumOfCards += anotherCard;
    renderGame();
    console.log("Drawing a new card from the deck!");
}


startBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCard);

