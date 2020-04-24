import {initializeCard, openCard, setCardWithEmployee} from "./employeeCard.js";
import {fillAllDesksWithInitialColor, highlightDeskById} from "./desks.js";

const cardOfResults = document.getElementById("card-of-results");
const cardOfNoResults = document.getElementById("card-of-no-results");
const results = cardOfResults.querySelector('.results');

export function setCardOfResultsAndShow(employees) {
    if (employees.length !== 0)
    {
        cardOfResults.style.display = "block";
        setCardOfResults(employees);
    }
    else {
        cardOfNoResults.style.display = "block";
    }
}

const closeButtonNoResults = document.querySelector('.close-btn-no-results');
closeButtonNoResults.addEventListener('click', closeCardNoResults);

function closeCardNoResults() {
    document.getElementById("card-of-no-results").style.display = "none";
}

function setCardOfResults(employees) {
    clearCardOfResults();

    const title = document.createElement('span');
    title.classList='title-res';
    title.textContent='Результаты поиска';
    results.appendChild(title);

    const resultsSeparator = document.createElement('img');
    resultsSeparator.classList = 'br-hor';
    resultsSeparator.src = './images/br-horiz.svg';

    for (let employee of employees) {
        const block = document.createElement('div');
        block.classList = 'block-result';
        results.appendChild(block);
        const rowRes = document.createElement('div');
        rowRes.classList = 'row-res';
        block.appendChild(rowRes);
        const name = document.createElement('span');
        name.classList = 'res-name';
        name.textContent = `${employee.lastName} ${employee.firstName}`;
        rowRes.appendChild(name);

        const position = document.createElement('span');
        position.classList = 'res-pos';
        position.textContent = employee.position.name;

        rowRes.appendChild(position);

        const unchangeStroke = document.createElement('div');
        unchangeStroke.classList = 'unchange-stroke-res';
        rowRes.appendChild(unchangeStroke);
        const teamRes = document.createElement('span');
        teamRes.classList = 'team-res';
        teamRes.textContent = 'Команда: ';

        unchangeStroke.appendChild(teamRes);
        const teamDesc = document.createElement('span');
        teamDesc.classList = 'team-desc';
        teamDesc.textContent = employee.team;
        unchangeStroke.appendChild(teamDesc);

        const unchangeStroke2 = document.createElement('div');
        unchangeStroke2.classList = 'unchange-stroke-res';
        rowRes.appendChild(unchangeStroke2);

        const floorRes = document.createElement('span');
        floorRes.classList = 'floor-res';
        floorRes.textContent = 'Этаж: ';
        unchangeStroke2.appendChild(floorRes);

        const floorNumber = document.createElement('span');
        floorNumber.classList = 'floor-number';
        floorNumber.textContent = employee.desk !== null ? employee.desk.floorNumber : '';
        unchangeStroke2.appendChild(floorNumber);

        const imgRes = document.createElement('div');
        imgRes.classList = 'img-res';
        block.appendChild(imgRes);
        const avatar = document.createElement('img');
        avatar.classList = 'avatar-res';
        avatar.src = `https://offficemap.azurewebsites.net/photos/${employee.photo.id}.png`;
        imgRes.appendChild(avatar);

        results.appendChild(resultsSeparator.cloneNode(true));

        block.addEventListener('click', () => showCard(employee));
    }

    const lastSeparator = results.lastChild;
    lastSeparator.remove();
}

function clearCardOfResults() {
    let child = results.lastElementChild;
    while (child) {
        results.removeChild(child);
        child = results.lastElementChild;
    }
}

function showCard(employee) {
    openCard("card-employee");
    initializeCard();
    setCardWithEmployee(employee);

    const deskId = employee.desk.id;
    fillAllDesksWithInitialColor();
    highlightDeskById(deskId);
}
