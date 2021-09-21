
// let num1 = 9;
// let num2 = 2;

// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;

// let sumEl = document.getElementById("sum-el")

// function add() {
//     let result = num1 + num2;
//     sumEl.textContent = "sum: " + result;
// }
// function subtract() {
//     let result = num1 - num2;
//     sumEl.textContent = "sum: " + result;
// }

// function divide() {
//     let result = num1 / num2;
//     sumEl.textContent = "sum: " + result;
// }
// function multiply() {
//     let result = num1 * num2;
//     sumEl.textContent = "sum: " + result;
// }

let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "cards: " + crads[0] + " - " + cards[1];
    sumEl.textContent = "sum: " + sum
    if (sum <= 20 ) {
        message = "Do you want a new card!"
    }
    else if(sum === 21 ) {
        message = "Woooh!, You've get Blackjack!"
        hasBlackjack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl,textContent = message;   
}
function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 7;

    sum += card

    startGame()
}
