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
    map.style.width = currentWidth.toString() + 'px';
    map.style.height = currentHeight.toString() + 'px';
    procentValue.textContent = currentZoom + '%';

    plusButton.disabled = false;
    minusButton.disabled = false;
}

setMap();

const plusButton = document.getElementById('plus');

const minusButton = document.getElementById('minus');

const procentValue = document.getElementById('val-scale');


plusButton.onclick = () => {
    setTimeout(upZoom, 100);
};


function upZoom() {
    console.log(currentWidth);
    if (currentZoom === maxZoom) {
        plusButton.disabled = true;
        minusButton.disabled = false;
    } else {
        currentZoom += zoomDelta;
        currentWidth += widthDelta;
        currentHeight += heightDelta;
        plusButton.disabled = false;
    }

    map.style.width = currentWidth.toString() + 'px';
    map.style.height = currentHeight.toString() + 'px';
    procentValue.textContent = currentZoom + '%';
}

minusButton.onclick = () => {
    setTimeout(downZoom, 100);
};

function downZoom() {

    if (currentZoom === minZoom) {
        minusButton.disabled = true;
        plusButton.disabled = false;
    } else {
        currentZoom -= zoomDelta;
        currentWidth -= widthDelta;
        currentHeight -= heightDelta;
        minusButton.disabled = false;
    }

    map.style.width = currentWidth.toString()  + 'px';
    map.style.height = currentHeight.toString()  + 'px';
    procentValue.textContent = currentZoom + '%';
}

/*function addOnWheel(elem, handler) {
    if (elem.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+
            elem.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            elem.addEventListener("mousewheel", handler);
        } else {
            // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
            elem.addEventListener("MozMousePixelScroll", handler);
        }
    } else { // IE8-
        map.attachEvent("onmousewheel", handler);
    }
}

let scale = 1;

addOnWheel(map, function(e) {

    let delta = e.deltaX || e.detail || e.wheelDelta;

    // отмасштабируем при помощи CSS
    if (delta > 0) scale += 0.25;
    else scale -= 0.25;

    map.style.transform = map.style.WebkitTransform = map.style.MsTransform = 'scale(' + scale + ')';

    // отменим прокрутку
    e.preventDefault();
});*/

