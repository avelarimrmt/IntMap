const desks = document.querySelectorAll(".light-table");


for (let desk of desks) {
    desk.addEventListener('mouseover', () => {
        desk.classList += ' hover';
    });
    desk.addEventListener('mouseout', () => {
        desk.classList = desk.classList.toString().replace(' hover', '')
    });
}

export function getAllDesks() {
    return desks;
}

export function highlightDeskById(deskId, color = '#B58F1C') {
    for (let desk of desks) {
        let currentId = parseInt(desk.getAttribute("data-id"));
        if (currentId === deskId) {
            desk.setAttribute('fill', color);

            desk.addEventListener('mouseover', () => {
                desk.classList = desk.classList.toString().replace(' hover', '')
            });
        }
    }
}

export function fillAllDesksWithInitialColor() {
    for (let desk of desks) {
        desk.setAttribute('fill', '#FFC617');
    }
}
