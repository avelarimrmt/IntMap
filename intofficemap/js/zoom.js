let currentZoom = 100;
const zoomDelta = 25;
const minZoom = 50;
const maxZoom = 150;

let currentWidth = 905;
const widthDelta = currentWidth / 4;

let currentHeight = 581;
const heightDelta = currentHeight / 4;

let map;

function setMap() {
    const floors = document.querySelectorAll('.floor-of-map');

    for (let floor of floors) {
        if (floor.getAttribute('data-floor') === 'active')
            map = floor;
    }
}

setMap();

const plusButton = document.getElementById('plus');

const minusButton = document.getElementById('minus');

const procentValue = document.getElementById('val-scale');

plusButton.addEventListener('click', upZoom);

function upZoom() {
    currentZoom += zoomDelta;
    currentWidth += widthDelta;
    currentHeight += heightDelta;

    if (currentZoom <= maxZoom) {
        map.style.width = currentWidth;
        map.style.height = currentHeight;
        procentValue.textContent = currentZoom + '%';
    }
}

minusButton.addEventListener('click', downZoom);

function downZoom() {
    currentZoom -= zoomDelta;
    currentWidth -= widthDelta;
    currentHeight -= heightDelta;

   if (currentZoom >= minZoom) {
        map.style.width = currentWidth;
        map.style.height = currentHeight;
       procentValue.textContent = currentZoom + '%';
    }
}