class Contribution { 

    constructor(openDate, closeDate, period, bet, frequencyOfСapitalization) {
        this.openDate = openDate;
        this.closeDate = closeDate;
        this.period = period;
        this.bet = bet;
        this.frequencyOfСapitalization = frequencyOfСapitalization;
        this.clientId = -1;
    }

    getOpenDate() {
        return this.openDate;
    }

    setOpenDate(openDate) {
        this.openDate = openDate;
    }

    getCloseDate() {
        return this.closeDate;
    }

    setCloseDate(closeDate) {
        this.closeDate = closeDate;
    }

    getPeriod() {
        return this.period;
    }

    setPeriod(period) {
        this.period = period;
    }

    getBet() {
        return this.bet;
    }

    setBet(bet) {
        this.bet = bet;
    }

    getFrequencyOfСapitalization() {
        return this.frequencyOfСapitalization;
    }

    setFrequencyOfСapitalization(frequencyOfСapitalization) {
        this.frequencyOfСapitalization = frequencyOfСapitalization;
    }
}