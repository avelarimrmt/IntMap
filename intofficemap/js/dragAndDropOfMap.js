/*

let map = document.querySelector('floor-of-map');

map.onmousedown = function(e) {

    let coords = getCoords(map);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    map.style.position = 'absolute';
    document.body.appendChild(map);
    moveAt(e);

    map.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
        map.style.left = e.pageX - shiftX + 'px';
        map.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    map.onmouseup = function() {
        document.onmousemove = null;
        map.onmouseup = null;
    };

}

map.ondragstart = function() {
    return false;
};

function getCoords(elem) {   // кроме IE8-
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
*/


document.ondragstart = () => false;

document.onmousedown = event => {
    if (!event.target.classList.contains('draggable')) return;

    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight );

    target = event.target;
    saveX = event.offsetX;
    saveY = event.offsetY;

    document.onmousemove = event => {
        target.style.position = 'absolute';
        target.style.top = event.pageY - saveY + 'px';
        target.style.left = event.pageX - saveX + 'px';
        check(event, target, scrollHeight);
    };

    document.onmouseup = event => {
        document.onmousemove = null;
    }
};

function check(event, target, scrollHeight){
    if (event.pageX - saveX <= 0) target.style.left = 0;
    if (event.pageY - saveY <=0) target.style.top = 0;
    if (event.pageY + (target.clientHeight - saveY) >= scrollHeight) {
        target.style.top = scrollHeight-target.clientHeight+'px';
    }
    if (event.pageX + (target.clientWidth - saveX) >= document.body.scrollWidth) target.style.left = document.body.scrollWidth - target.clientWidth+'px ';
}
