

let map1;

export function setMap1() {
    const floors = document.querySelectorAll('.floor-of-map');

    for (let floor of floors) {
        if (floor.getAttribute('data-floor') === 'active')
            map1 = floor;
    }

    addEventsOnMap();
}

setMap1();

function addEventsOnMap(){
    map1.addEventListener('mousedown', function (e) {

        let coords = getCoords(map1);
        let shiftX = e.pageX - coords.left;
        let shiftY = e.pageY - coords.top;

        map1.style.position = 'absolute';
        document.body.appendChild(map1);
        moveAt(e);

        map1.style.zIndex = 1; // над другими элементами

        function moveAt(e) {
            map1.style.left = e.pageX - shiftX + 'px';
            map1.style.top = e.pageY - shiftY + 'px';
            map1.style.cursor = 'move';
        }

        document.onmousemove = function (e) {
            moveAt(e);
        };

        map1.onmouseup = function () {
            document.onmousemove = null;
            map1.onmouseup = null;
        };

    });

    map1.ondragstart = function () {
        return false;
    };
}



function getCoords(elem) {   // кроме IE8-
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}