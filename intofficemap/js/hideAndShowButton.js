import {getCurrentCard} from "./allCards.js";

const hideButton =  document.querySelector('.hide');
const showButton =  document.querySelector('.show');

export function displayHideButton() {
    hideButton.style.display = 'block';
}

export function displayShowButton() {
    showButton.style.display = 'block';
}

export function unDisplayShowButton() {
    showButton.style.display = 'none';
}

export function unDisplayHideButton() {
    hideButton.style.display = 'none';
}

hideButton.addEventListener('click', hideCard);

let currentCard;

function hideCard() {
    currentCard = getCurrentCard();
    currentCard.style.display = 'none';
    displayShowButton();
    unDisplayHideButton();
}

showButton.addEventListener('click', showCard);

function showCard() {
    currentCard = getCurrentCard();
    currentCard.style.display = 'block';
    displayHideButton();
    unDisplayShowButton();
}
