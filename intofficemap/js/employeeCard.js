import {fillAllDesksWithInitialColor} from './desks.js'

export function openCard(element) {
    const card = document.getElementById(element);
    card.style.display = 'block';
}

const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', closeCard);

function closeCard() {
    document.getElementById("card-employee").style.display = "none";

    fillAllDesksWithInitialColor();
}

const closeButtonFreeDesk = document.querySelector('.close-btn-no-emp');
closeButtonFreeDesk.addEventListener('click', closeCardFreeDesk);

function closeCardFreeDesk() {
    document.getElementById("card-with-free-table").style.display = "none";
}

const name = document.querySelector(".first-name");
const midName = document.querySelector(".middle-name");
const lastName = document.querySelector(".last-name");
const direction = document.querySelector(".direction");
const position = document.querySelector(".position-emp");
const team = document.querySelector(".team");
const email = document.querySelector(".mail");
const phone = document.querySelector(".phone");
const floor = document.querySelector(".floor-emp");

const ava = document.querySelector(".avatar-emp");

export function initializeCard() {
    name.textContent = "";
    midName.textContent = "";
    lastName.textContent = "";
    team.textContent = "";
    direction.textContent = "";
    position.textContent = "";
    email.textContent = "";
    phone.textContent = "";
    floor.textContent = "";
}

export function setCardWithEmployee(employee) {
    name.textContent = employee.firstName;
    midName.textContent = employee.middleName;
    lastName.textContent = employee.lastName;
    team.textContent = employee.team;
    direction.textContent = employee.direction;
    position.textContent = employee.position.name;
    email.textContent = employee.emailAddress;
    phone.textContent = employee.phoneNumber;
    floor.textContent = employee.desk.floorNumber;

    ava.src = `https://offficemap.azurewebsites.net/photos/${employee.photo.id}.png`;
}
