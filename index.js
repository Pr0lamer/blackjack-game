let minValue = 2;
let maxValue = 11;
let message = "";
let isAlive = false;
let hasBlackJack = false;
let cardsArray = [];
let sumOfCards = 0;

let startBtn = document.getElementById("start-btn");
let newCardBtn = document.querySelector("#new-card-btn");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomInRange(min, max) {
    //return Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNumber = Math.floor(Math.random() * max) + min;
    if(randomNumber === 1){
        return 11;
    }
    else if(randomNumber > 10){
        return 10;
    }
    else{
        return randomNumber;
    }
     
  }

function startGame(){
    isAlive = true;
    let firstCard = getRandomInRange(minValue, maxValue);
    let secondCard = getRandomInRange(minValue, maxValue);
    cardsArray = [firstCard, secondCard];
    sumOfCards = firstCard + secondCard;
    

    renderGame();
}

function renderGame(){
    sumEl.textContent = `Sum: ${sumOfCards}`;
    cardsEl.textContent = "Cards: ";
    
    for(let i = 0; i < cardsArray.length; i++){
        console.log(cardsArray[i]);
        cardsEl.textContent += cardsArray[i] + " ";
    }

    if (sumOfCards <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sumOfCards === 21) {
        message = "Wohoo! You've got Blackjack! :)";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! :(";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    let anotherCard = getRandomInRange(minValue, maxValue);
    sumOfCards += anotherCard;
    cardsArray.push(anotherCard);
    
    renderGame();
    
}


startBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCard);

