class Server {

    constructor() {
        this.token = "";
    }

    async GET(url) {
        const response = await fetch(url);
        return await response.json();
    }

    async POST(object, url) {
        const response = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(object)
        });
        return await response.json();
    }

    async addPerson(client, person) {
        const object = {client, person, token: this.token};
        const data = await this.POST(object, `/api/?method=addPerson`);
        switch (data.status) {
            case 'OK': {
                server.setcookie("fullAccount", true);
                product.page();
                break;
            }
            case 'ERROR': {
                console.error('ERROR addPerson');
                break;
            }
        }
    }

    async addCredit(credit) {
        const object = {credit, token: this.token};
        const data = await this.POST(object, `/api/?method=addCredit`);
        switch (data.status) {
            case 'OK': {
                final.page();
                break;
            }
            case 'ERROR': {
                console.error('ERROR addCredit');
                break;
            }
        }
    }

    async addContribution(contribution) {
        const object = {contribution, token: this.token};
        const data = await this.POST(object, `/api/?method=addContribution`);
        switch (data.status) {
            case 'OK': {
                final.page();
                break;
            }
            case 'ERROR': {
                console.error('ERROR addContribution');
                break;
            }
        }
    }

    async responseCheck() {
        const object = {token: this.token};
        const data = await this.POST(object, `/api/?method=responseCheck`);
        switch (data.status) {
            case 'OK': {
                return data['response'];
            }
            case 'ERROR': {
                console.error('ERROR responseCheck');
                break;
            }
        }
    }

    async authorization(user) {
        const object = {user};
        const data = await this.POST(object, `/api/?method=authorization`);
        switch (data.status) {
            case 'OK': {
                this.token = data['response']['token'];
                server.setcookie("token", this.token);
                if(data['response']['fullAccount']) {
                    server.setcookie("fullAccount", true);
                    product.page();
                } else {
                    main.page();
                }
                break;
            }
            case 'ERROR': {
                console.error('ERROR authorization');
                break;
            }
        }
    }

    async registration(user) {
        const object = {user};
        const data = await this.POST(object, `/api/?method=registration`);
        switch (data.status) {
            case 'OK': {
                authorization.page();
                break;
            }
            case 'ERROR': {
                console.error('ERROR registration');
                break;
            }
        }
    }

    async setcookie(name, value) {
        const object = {name: name, value: value};
        const data = await this.POST(object, `/api/?method=setcookie`);
        switch (data.status) {
            case 'OK': {
                break;
            }
            case 'ERROR': {
                console.error('ERROR setcookie');
                break;
            }
        }
    }

    async unsetcookie(name) {
        const object = {name: name};
        const data = await this.POST(object, `/api/?method=unsetcookie`);
        switch (data.status) {
            case 'OK': {
                break;
            }
            case 'ERROR': {
                console.error('ERROR unsetcookie');
                break;
            }
        }
    }

    async checkcookie(name) {
        const object = {name: name};
        const data = await this.POST(object, `/api/?method=checkcookie`);
        switch (data.status) {
            case 'OK': {
                switch(name) {
                    case 'token':
                        this.token = data['response'];
                        return true;
                    case 'fullAccount':
                        return true;
                }
                break;
            }
            case 'ERROR': {
                return false;
            }
        }
    }
}