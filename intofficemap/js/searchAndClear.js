import {highlightDeskById} from './desks.js'
import {initializeCard} from './employeeCard.js'
import {setCardWithEmployee} from './employeeCard.js'
import {fillAllDesksWithInitialColor} from './desks.js';
import {setCardOfResultsAndShow, closeCardOfResults, closeCardOfNoResults} from './cardOfResults.js'
import {closeAllCards} from "./allCards.js";
import {openEmployeeCard} from "./employeeCard.js";

const searchInput = document.getElementById('textInput');

searchInput.addEventListener('focus', showEmployeesList);

function showEmployeesList() {
    listOfEmployees.style.display = 'block';
    clearButton.style.borderBottomRightRadius = '0';

    if (searchInput.value === '')
        searchInput.style.borderBottomLeftRadius = '10px';
    else
        searchInput.style.borderBottomLeftRadius = '0';
}

searchInput.addEventListener('blur', hideEmployeesList);

function hideEmployeesList() {
    setTimeout(() => listOfEmployees.style.display = 'none', 100);
    searchInput.style.borderBottomLeftRadius = '10px';
    clearButton.style.borderBottomRightRadius = '10px';
}

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchButton.click();
        searchInput.blur();
    }
});

let clearButton = document.getElementById("clearButton");

let buttonsSeparator = document.getElementById("brvert");

const listOfEmployees = document.getElementById('drop-down');

clearButton.addEventListener('click', clearInput);

function clearInput() {
    searchInput.value = "";

    initializeSearchLine();

    closeCardOfResults();
    closeCardOfNoResults();
    clearList(listOfEmployees);

    fillAllDesksWithInitialColor();
}

let searchButton = document.getElementById("searchButton");

searchButton.addEventListener('click', () => {
    searchInput.style.color = '#BCBCBC';
    setCardOfResultsAndShow(currentEmployees);
    highlightDesksOfEmployees(currentEmployees);
});

function highlightDesksOfEmployees(employees) {
    for (let employee of employees) {
        if (employee.desk !== null) {
            highlightDeskById(employee.desk.id);
        }
    }
}

let currentEmployees;

function initializeSearchLine() {
    searchButton.disabled = true;
    searchButton.style.borderBottomRightRadius = '10px';
    searchButton.style.borderTopRightRadius = '10px';
    searchInput.style.borderBottomLeftRadius = '10px';

    clearButton.style.display = 'none';
    buttonsSeparator.style.display = 'none';
}

function showButtonsOnInput() {
    searchButton.disabled = false;
    searchButton.style.borderRadius = '0';
    clearButton.style.display = 'block';
    buttonsSeparator.style.display = 'block';
}

searchInput.addEventListener('input', setListOfEmployees);

async function setListOfEmployees() {
    searchInput.style.color = '#000000';
    if (searchInput.value === '') {
        /* очищаем список с задержкой,
         * задержка нужна при большом количестве событий oninput,
         * иначе обработчик события oninput с непустой строкой сработает позже
         */
        setTimeout(clearList, 500, listOfEmployees);

        initializeSearchLine();
    } else {
        showButtonsOnInput();

        const response = await fetch(
            `https://offficemap.azurewebsites.net/api/employees/starts-with/${searchInput.value}`,
            {
                method: "GET",
                headers: {"Accept": "application/json"}
            });
        if (response.ok === true) {
            const employees = await response.json();

            currentEmployees = employees;

            clearList(listOfEmployees);

            for (let employee of employees) {
                let li = document.createElement('li');

                li.textContent = `${employee.lastName} ${employee.firstName}`;

                listOfEmployees.appendChild(li);

                li.addEventListener('click', () => showCard(employee, li.textContent));
            }
            let decorationLine = document.createElement('div');
            listOfEmployees.appendChild(decorationLine);

            clearButton.style.borderBottomRightRadius = '0';
            searchInput.style.borderBottomLeftRadius = '0';
        }
    }
}


function clearList(datalist) {
    let child = datalist.lastElementChild;
    while (child) {
        datalist.removeChild(child);
        child = datalist.lastElementChild;
    }
}

function showCard(employee, value) {
    searchInput.value = value;
    searchInput.style.color = '#BCBCBC';

    closeAllCards();

    openEmployeeCard();
    initializeCard();
    setCardWithEmployee(employee);

    const deskId = employee.desk.id;
    fillAllDesksWithInitialColor();
    highlightDeskById(deskId);
}
