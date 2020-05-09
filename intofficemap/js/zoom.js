let currentZoom = 100;
const zoomDelta = 25;
const minZoom = 50;
const maxZoom = 150;

let currentWidth = 905;
const widthDelta = currentWidth / 4;

let currentHeight = 581;
const heightDelta = currentHeight / 4;

let map;

export function setMap() {
    const floors = document.querySelectorAll('.floor-of-map');

    for (let floor of floors) {
        if (floor.getAttribute('data-floor') === 'active')
            map = floor;
    }
}

export function resetZoom() {
    currentZoom = 100;
    currentWidth = 905;
    currentHeight = 581;
    map.style.width = currentWidth;
    map.style.height = currentHeight;
    procentValue.textContent = currentZoom + '%';
}

setMap();

const plusButton = document.getElementById('plus');

const minusButton = document.getElementById('minus');

const procentValue = document.getElementById('val-scale');
const value = procentValue.textContent;

/*if (value.slice(value.length, value.length-1) !== (maxZoom.toString())) {
    plusButton.addEventListener('click', upZoom);
}*/

plusButton.addEventListener('click', upZoom);

function upZoom() {
    currentZoom += zoomDelta;
    currentWidth += widthDelta;
    currentHeight += heightDelta;

    if (currentZoom === maxZoom) {
        plusButton.disabled = true;
        minusButton.disabled = false;
    } else
        plusButton.disabled = false;

    map.style.width = currentWidth;
    map.style.height = currentHeight;
    procentValue.textContent = currentZoom + '%';
}

minusButton.addEventListener('click', downZoom);

function downZoom() {
    currentZoom -= zoomDelta;
    currentWidth -= widthDelta;
    currentHeight -= heightDelta;

    if (currentZoom === minZoom) {
        minusButton.disabled = true;
        plusButton.disabled = false;
    } else
        minusButton.disabled = false;

    map.style.width = currentWidth;
    map.style.height = currentHeight;
    procentValue.textContent = currentZoom + '%';
}

