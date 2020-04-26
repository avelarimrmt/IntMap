import {closeCardFreeDesk, closeEmployeeCard} from './employeeCard.js'
import {closeCardOfResults, closeCardOfNoResults} from './cardOfResults.js'

export function closeAllCards() {
    closeEmployeeCard();
    closeCardFreeDesk();
    closeCardOfResults();
    closeCardOfNoResults();
}