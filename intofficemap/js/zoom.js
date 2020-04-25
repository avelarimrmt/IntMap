let currentZoom = 100;
const zoomDelta = 25;
const minZoom = 25;
const maxZoom = 100;

let currentWidthOfViewBox = 1280;
const widthDelta = currentWidthOfViewBox / 4;

let currentHeightOfViewBox = 660;
const heightDelta = currentHeightOfViewBox / 4;

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

plusButton.addEventListener('click', upZoom);

function upZoom() {
    currentZoom += zoomDelta;
    currentWidthOfViewBox -= widthDelta;
    currentHeightOfViewBox -= heightDelta;

    const oldViewBox = map.getAttribute('viewBox');
    let viewBoxParts = oldViewBox.toString().split(' ');
    viewBoxParts[2] = currentWidthOfViewBox.toString();
    viewBoxParts[3] = currentHeightOfViewBox.toString();
    map.setAttribute('viewBox', viewBoxParts.join(' '));
}