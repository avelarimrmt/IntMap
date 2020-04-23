import {getAllDesks} from './desks.js'
import {openCard} from './card.js'
import {highlightDeskById} from './desks.js';
import {fillAllDesksWithInitialColor} from './desks.js'
import {initializeCard} from './card.js'
import {setCardWithEmployee} from  './card.js'
import {setCardWithFreeDesk} from  './card.js'

const desks = getAllDesks();
for (let desk of desks) {
    desk.onclick = async () => {
        fillAllDesksWithInitialColor();

        let id = desk.getAttribute("data-id");
        highlightDeskById(parseInt(id), 'red');

        openCard();
        initializeCard();

        if (id != null) {
            const response = await fetch(`https://offficemap.azurewebsites.net/api/employees/by-desk-id/${id}`, {
                method: "GET",
                headers: {"Accept": "application/json"}
            });

            if (response.ok === true) {
                const employees = await response.json();
                setCardWithEmployee(employees[0]);
            }
        } else {
            setCardWithFreeDesk();
        }
    }
}