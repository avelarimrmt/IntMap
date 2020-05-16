const tokenKey = "accessToken";

// отпавка запроса к контроллеру AccountController для получения токена
async function getTokenAsync() {

    // получаем данные формы и фомируем объект для отправки
    const login = document.getElementById("login-input").value;
    const password = document.getElementById("password-input").value;
    const hashValue = window.sha256(password);

    const formData = new FormData();
    formData.append("login", login);
    formData.append("password", hashValue);

    // отправляет запрос и получаем ответ
    const response = await fetch("https://offficemap.azurewebsites.net/api/account/get-token", {
        method: "POST",
        headers: {"Accept": "application/json"},
        body: formData
    });

    const data = await response.json();

    if (response.ok === true) {
        // сохраняем в хранилище sessionStorage токен доступа
        sessionStorage.setItem(tokenKey, data.access_token);

        window.location = 'index.html';
    } else {
        // если произошла ошибка, из errorText получаем текст ошибки
        console.log("Error: ", response.status, data.errorText);
    }
}

const submitButton = document.getElementById("submit-login");
submitButton.onclick = (e) => {
    e.preventDefault();
    getTokenAsync();
};