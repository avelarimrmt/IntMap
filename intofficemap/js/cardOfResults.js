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


    const block = document.createElement('div');
    block.classList='block-result';
    results.appendChild(block);
        const rowRes = document.createElement('div');
        rowRes.classList='row-res';
        block.appendChild(rowRes);
            const name = document.createElement('span');
            const position = document.createElement('span');
            name.classList='res-name';
            position.classList='res-pos';
            rowRes.appendChild(name);
            rowRes.appendChild(position);

            const unchangeStroke = document.createElement('div');
            unchangeStroke.classList='unchange-stroke-res';
            rowRes.appendChild(unchangeStroke);
                const teamRes = document.createElement('span');
                teamRes.classList='team-res';
                teamRes.textContent = 'Команда:';
                unchangeStroke.appendChild(teamRes);
                const teamDesc = document.createElement('span');
                 teamDesc.classList='team-desc';
                unchangeStroke.appendChild(teamDesc);

            const unchangeStroke2 = document.createElement('div');
            unchangeStroke2.classList='unchange-stroke-res';
            rowRes.appendChild(unchangeStroke2);

                const floorRes = document.createElement('span');
                floorRes.classList='floor-res';
                floorRes.textContent = 'Этаж:';
                unchangeStroke2.appendChild(floorRes);

                const floorNumber = document.createElement('span');
                floorNumber.classList='floor-number';
                unchangeStroke2.appendChild(floorNumber);

        const imgRes = document.createElement('div');
        imgRes.classList='img-res';
        block.appendChild(imgRes);
            const avatar = document.createElement('img');
            avatar.classList='avatar-res';
            imgRes.appendChild(avatar);


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

