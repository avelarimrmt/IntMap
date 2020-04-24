const desks = document.querySelectorAll(".light-table");

export function getAllDesks() {
    return desks;
}

export function highlightDeskById(deskId, color) {
    for (let desk of desks) {
        let currentId = parseInt(desk.getAttribute("data-id"));
        if (currentId === deskId) {
            desk.style.fill = color;
        }
    }
}

export function fillAllDesksWithInitialColor() {
    for (let desk of desks) {
        desk.style.fill = 'FFC617';
    }
}
