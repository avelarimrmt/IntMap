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
    document.getElementById("overlay").style.display = "block";

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

    name.textContent = "";
    midName.textContent = "";
    lastName.textContent = "";
    team.textContent = "";
    direction.textContent = "";
    position.textContent = "";
    email.textContent = "";
    phone.textContent = "";
    floor.textContent = "";

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

    const deskId = employee.desk.id;

    for (let desk of desks) {
        let id = parseInt(desk.getAttribute("data-id"));
        if (deskId === id) {
            //TODO сделать фокус стола вместо заливки
            desk.style.fill = 'red';
        }
    }


}