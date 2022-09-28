class LegalPerson { 

    constructor(nameCompany, address, ogrn, innCompany, kpp) {
        this.nameCompany = nameCompany;
        this.address = address;
        this.ogrn = ogrn;
        this.innCompany = innCompany;
        this.kpp = kpp;
        this.clientId = -1;
    }

    getNameCompany() {
        return this.nameCompany;
    }

    setNameCompany(nameCompany) {
        this.nameCompany = nameCompany;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getOgrn() {
        return this.ogrn;
    }

    setOgrn(ogrn) {
        this.ogrn = ogrn;
    }

    getInnCompany() {
        return this.innCompany;
    }

    setInnCompany(innCompany) {
        this.innCompany = innCompany;
    }

    getKpp() {
        return this.kpp;
    }

    setKpp(kpp) {
        this.kpp = kpp;
    }
}