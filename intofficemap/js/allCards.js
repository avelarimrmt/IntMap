import {closeCardFreeDesk, closeEmployeeCard} from './employeeCard.js'
import {closeCardOfResults, closeCardOfNoResults} from './cardOfResults.js'

export function closeAllCards() {
    // закрыть все карточки - сотрудника, результатов, noEmp, freeDesk
    closeEmployeeCard();
    closeCardFreeDesk();
    closeCardOfResults();
    closeCardOfNoResults();
}