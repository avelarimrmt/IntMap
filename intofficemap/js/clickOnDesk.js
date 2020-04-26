import {getAllDesks} from './desks.js'
import {highlightDeskById} from './desks.js';
import {fillAllDesksWithInitialColor} from './desks.js'
import {initializeCard} from './employeeCard.js'
import {setCardWithEmployee} from './employeeCard.js'
import {closeAllCards} from "./allCards.js";
import {openEmployeeCard} from "./employeeCard.js";
import {openCardFreeDesk} from "./employeeCard.js";

const desks = getAllDesks();
for (let desk of desks) {
    desk.onclick = async () => {
        closeAllCards();

        fillAllDesksWithInitialColor();

        let id = desk.getAttribute("data-id");
        highlightDeskById(parseInt(id));


        if (id != null) {
            openEmployeeCard();
            initializeCard();
            const response = await fetch(`https://offficemap.azurewebsites.net/api/employees/by-desk-id/${id}`, {
                method: "GET",
                headers: {"Accept": "application/json"}
            });

            if (response.ok === true) {
                const employees = await response.json();
                setCardWithEmployee(employees[0]);
            }
        } else {
            openCardFreeDesk();
        }
    }
}
