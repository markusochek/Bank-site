class PhysicalPerson {

    constructor(dateOfBirth, passportSeries, passportNumber, passportDate) {
        this.dateOfBirth = dateOfBirth;
        this.passportSeries = passportSeries;
        this.passportNumber = passportNumber;
        this.passportDate = passportDate;
        this.clientId = -1;
    }

    getDateOfBirth() {
        return this.dateOfBirth;
    }

    setDateOfBirth(dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    getPassportSeries() {
        return this.passportSeries;
    }

    setPassportSeries(passportSeries) {
        this.passportSeries = passportSeries;
    }

    getPassportNumber() {
        return this.passportNumber;
    }

    setPassportNumber(passportNumber) {
        this.passportNumber = passportNumber;
    }

    getPassportDate() {
        return this.passportDate;
    }

    setPassportDate(passportDate) {
        this.passportDate = passportDate;
    }
}