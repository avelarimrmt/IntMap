const searchInput = document.getElementById('textInput');
let button1 = document.getElementById("clearButton");
let button2 = document.getElementById("searchButton");
let brvert = document.getElementById("brvert");

button1.onclick = function (e) {
    searchInput.value = "";
    button2.disabled = true;
    button2.style.borderRadius = '0px 10px 10px 0px';
    button1.style.display = 'none';
    brvert.style.display = 'none';
    document.getElementById("overlay-2").style.display = "none";
};

searchInput.oninput = () => setTimeout(async () => await showListOfEmployees(), 300);

async function showListOfEmployees() {
    const listOfEmployees = document.getElementById('drop-down');

    clearList(listOfEmployees);

    if (searchInput.value === '') {
        button2.disabled = true;
        button2.style.borderRadius = '0px 10px 10px 0px';
        button1.style.display = 'none';
        brvert.style.display = 'none';
    } else {
        button2.disabled = false;
        button2.style.borderRadius = '0';
        button1.style.display = 'block';
        brvert.style.display = 'block';

        const response = await fetch(
            `https://offficemap.azurewebsites.net/api/employees/starts-with/${searchInput.value}`,
            {
                method: "GET",
                headers: {"Accept": "application/json"}
            });

        if (response.ok === true) {
            const employees = await response.json();

            clearList(listOfEmployees);
            for (let employee of employees) {
                let li = document.createElement('li');

                li.textContent = `${employee.lastName} ${employee.firstName}`;

                listOfEmployees.appendChild(li);
            }
        }
    }
}

function clearList(ul) {
    let child = ul.lastElementChild;
    while (child) {
        ul.removeChild(child);
        child = ul.lastElementChild;
    }
}