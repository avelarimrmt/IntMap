const buttonUp = document.querySelector('.up-toggle');
const buttonDown = document.querySelector('.down-toggle');
const floorNumber = document.getElementById('floor-number');
const floors = document.querySelectorAll('.floor-of-map');

let currentFloor = 14;
const minFloor = 14;
const maxFloor = 15;

function setFloorNumber(floor) {
    floorNumber.textContent = floor.toString();
}

setFloorNumber(currentFloor);

buttonUp.addEventListener('click', upFloor);

function upFloor() {
    //сменить на следующий спан floorNumbers(присвоить спану атрибут active)
    //если конец спанов, то сделать кнопку buttonUp disabled
    //убрать disabled у кнопки buttonDown

    if (currentFloor === maxFloor)
        buttonUp.disabled = true;
    else {
        currentFloor++;
        setFloorNumber(currentFloor);
        for (let floor of floors) {
            if (floor.getAttribute('data-floor') === 'active')
                floor.setAttribute('data-floor', '');
        }

        for (let floor of floors) {
            if (floor.getAttribute('floor-number') === currentFloor.toString())
                floor.setAttribute('data-floor', 'active');
        }
        buttonDown.disabled = false;
        if (currentFloor === maxFloor)
            buttonUp.disabled = true;
    }
}

buttonDown.addEventListener('click', downFloor);

function downFloor() {
    if (currentFloor === minFloor)
        buttonDown.disabled = true;
    else {
        currentFloor--;
        setFloorNumber(currentFloor);
        for (let floor of floors) {
            if (floor.getAttribute('data-floor') === 'active')
                floor.setAttribute('data-floor', '');
        }

        for (let floor of floors) {
            if (floor.getAttribute('floor-number') === currentFloor.toString())
                floor.setAttribute('data-floor', 'active');
        }
        buttonUp.disabled = false;
        if (currentFloor === minFloor)
            buttonDown.disabled = true;
    }
}

export function showFloorWithFloorNumber(floorNumber) {
    if (currentFloor > floorNumber)
        while (currentFloor !== floorNumber)
            downFloor();
    else if (currentFloor < floorNumber)
        while (currentFloor !== floorNumber)
            upFloor();
}