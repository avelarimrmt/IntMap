const desks = document.querySelectorAll(".light-table");

export function getAllDesks() {
    return desks;
}

export function highlightDeskById(deskId, color) {
    for (let desk of desks) {
        let currentId = parseInt(desk.getAttribute("data-id"));
        if (currentId === deskId) {
            //TODO сделать фокус стола вместо заливки
            desk.style.fill = color;
        }
    }
}

export function fillAllDesksWithInitialColor() {
    for (let desk of desks) {
        //TODO вернуть столам изначальный цвет
        desk.style.fill = 'blue';
    }
}
