class Client {
    constructor(fullName, inn, typePerson) {
        this.fullName = fullName;
        this.inn = inn;
        this.typePerson = typePerson;
        this.userId = -1;
    }

    getFullName() {
        return this.fullName;
    }

    setFullName(fullName) {
        this.fullName = fullName;
    }

    getINN() {
        return this.INN;
    }

    setINN(INN) {
        this.INN = INN;
    }

    getTypePerson() {
        return this.typePerson;
    }

    setTypePerson(typePerson) {
        this.typePerson = typePerson;
    }
}