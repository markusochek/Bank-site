class Credit { 

    constructor(openDate, closeDate, period, sum, paymentSchedule) {
        this.openDate = openDate;
        this.closeDate = closeDate;
        this.period = period;
        this.sum = sum;
        this.paymentSchedule = paymentSchedule;
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

    getSum() {
        return this.sum;
    }

    setSum(sum) {
        this.sum = sum;
    }

    getPaymentSchedule() {
        return this.paymentSchedule;
    }

    setPaymentSchedule(paymentSchedule) {
        this.paymentSchedule = paymentSchedule;
    }
}