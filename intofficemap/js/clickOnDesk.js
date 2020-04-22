const desks = document.querySelectorAll(".light-table");

for (let desk of desks)
{
	desk.onclick = async() => {
		document.getElementById("overlay").style.display = "block";
		let id = desk.getAttribute("data-id");

		const noEmp = document.querySelector(".title-card");
		const name = document.querySelector(".first-name");
		const midName = document.querySelector(".middle-name");
		const lastName = document.querySelector(".last-name");
		const direction = document.querySelector(".direction");
		const position = document.querySelector(".position-emp");
		const team = document.querySelector(".team");
		const email = document.querySelector(".mail");
		const phone = document.querySelector(".phone");
		const floor = document.querySelector(".floor-emp");

		const ava = document.querySelector(".avatar-emp");

		name.textContent = "";
		midName.textContent = "";
		lastName.textContent = "";
		team.textContent = "";
		direction.textContent = "";
		position.textContent = "";
		email.textContent = "";
		phone.textContent = "";
		floor.textContent = "";
		noEmp.textContent = "Информация о сотруднике";
		noEmp.style.margin = "0";


		if (id != null) {
			const response = await fetch(`https://offficemap.azurewebsites.net/api/employees/by-desk-id/${id}`, {
				method: "GET",
				headers: {"Accept": "application/json"}	
			});

			if (response.ok === true) {
				const employees = await response.json();
				name.textContent = employees[0].firstName;
				midName.textContent = employees[0].middleName;
				lastName.textContent = employees[0].lastName;
				team.textContent = employees[0].team;
				direction.textContent = employees[0].direction;
				position.textContent = employees[0].position.name;
				email.textContent = employees[0].emailAddress;
				phone.textContent = employees[0].phoneNumber;
				floor.textContent = employees[0].desk.floorNumber;

				ava.style.display = "block";
				ava.src = `https://offficemap.azurewebsites.net/photos/${employees[0].photo.id}.png`;
			}
		}

		else
		{
			noEmp.textContent = "Выбранный стол не занят сотрудником";

			noEmp.style.margin = "80px 0 0 0";

			ava.style.display = "none";

		}
	}
}