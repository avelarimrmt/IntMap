import {fillAllDesksWithInitialColor} from './desks.js'

export function openCard() {
    const card = document.getElementById("card-employee");
    card.style.display = 'block';
}

const closeButton = document.querySelector('.close-btn');

closeButton.addEventListener('click', closeCard);

function closeCard() {
    document.getElementById("card-employee").style.display = "none";

    fillAllDesksWithInitialColor();
}

const noEmp = document.querySelector(".title-card");
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
    noEmp.textContent = "Информация о сотруднике";
    noEmp.style.margin = "0";
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

    ava.style.display = "block";
    ava.src = `https://offficemap.azurewebsites.net/photos/${employee.photo.id}.png`;
}

export function setCardWithFreeDesk() {
    noEmp.textContent = "Выбранный стол не занят сотрудником";

    noEmp.style.margin = "80px 0 0 0";

    ava.style.display = "none";
}