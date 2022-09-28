class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
        this.token = "";
    }

    getLogin() {
        return this.login;
    }

    setLogin(login) {
        this.login = login;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }
}