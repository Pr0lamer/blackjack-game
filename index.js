let minValue = 2;
let maxValue = 11;

let firstCard = getRandomInRange(minValue, maxValue);
console.log(firstCard);
let secondCard = getRandomInRange(minValue, maxValue);
console.log(secondCard);
let sumOfCards = firstCard + secondCard;
console.log(sumOfCards);

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

