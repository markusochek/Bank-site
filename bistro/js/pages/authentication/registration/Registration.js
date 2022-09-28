class Registration {
    page() {
        bodyInnerHTML.innerHTML = `
                <input id="registrationLogin" placeholder="Введите логин">
                <input id="registrationPassword" placeholder="Введите пароль">
                <button onclick = 'registration.request()'>Зарегистрироваться</button>`
    }

    request() {
        const registrationLogin = document.getElementById("registrationLogin");
        const registrationPassword = document.getElementById("registrationPassword");
        server.registration(new User(registrationLogin.value, registrationPassword.value));
        authorization.page();
    }
}