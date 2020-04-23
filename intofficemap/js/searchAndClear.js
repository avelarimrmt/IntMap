import {highlightDeskById} from './desks.js'
import {openCard} from './card.js'
import {initializeCard} from './card.js'
import {setCardWithEmployee} from './card.js'

const searchInput = document.getElementById('textInput');
let clearButton = document.getElementById("clearButton");
let searchButton = document.getElementById("searchButton");
let buttonsSeparator = document.getElementById("brvert");

const listOfEmployees = document.getElementById('drop-down');

clearButton.addEventListener('click', clearInput);

function clearInput() {
    searchInput.value = "";

    initializeSearchLine();

    document.getElementById("overlay-2").style.display = "none";

    clearList(listOfEmployees);
}

function initializeSearchLine() {
    searchButton.disabled = true;
    searchButton.style.borderRadius = '0px 10px 10px 0px';
    clearButton.style.display = 'none';
    buttonsSeparator.style.display = 'none';
}

function showButtonsOnInput() {
    searchButton.disabled = false;
    searchButton.style.borderRadius = '0';
    clearButton.style.display = 'block';
    buttonsSeparator.style.display = 'block';
}

searchInput.addEventListener('input', showListOfEmployees);


async function showListOfEmployees() {
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

            clearList(listOfEmployees);
            for (let employee of employees) {
                let li = document.createElement('li');

                li.textContent = `${employee.lastName} ${employee.firstName}`;

                listOfEmployees.appendChild(li);

                li.addEventListener('click', () => showCard(employee));
            }
        }
    }
}

function clearList(ul) {
    let child = ul.lastElementChild;
    while (child) {
        ul.removeChild(child);
        child = ul.lastElementChild;
    }
}

function showCard(employee) {
    openCard();
    initializeCard();
    setCardWithEmployee(employee);

    const deskId = employee.desk.id;
    highlightDeskById(deskId, 'red');
}
