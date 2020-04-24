const cardOfResults = document.getElementById("card-of-results");
const results = cardOfResults.querySelector('.results');

export function setCardOfResultsAndShow(employees) {
    cardOfResults.style.display = "block";

    setCardOfResults(employees);


}

function setCardOfResults(employees) {
    //todo очищать карточку результатов

    // const resultsSeparator = document.createElement('img');
    // resultsSeparator.classList = 'br-hor';
    // resultsSeparator.src = './images/br-horiz.svg';


    const block=document.createElement('div');
    block.classList='block-result';
    results.appendChild(block);



    // for (let employee of employees) {
    //     const name=document.createElement()
    //     name.textContent = `${employee.lastName} ${employee.firstName}`;
    //     position.textContent = employee.position.name;
    //     team.textContent = employee.team;
    //     floor.textContent = employee.desk.floorNumber;
    //
    //     photo.style.display = "block";
    //     photo.src = `https://offficemap.azurewebsites.net/photos/${employee.photo.id}.png`;
    // }


}

