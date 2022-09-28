class CreditPage {
    page() {
        bodyInnerHTML.innerHTML = `
            <h1>Заполните данные</h1>
            <input id="openDate" placeholder="введите дату открытия кредита">
            <input id="closeDate" placeholder="Введите дату закрытия кредита">
            <input id="period" placeholder="Введите период погашения кредита">

            <input id="sum" placeholder="Введите сумму вклада">
            <input id="paymentSchedule" placeholder="Введите какой будет график платежей">
            <button onclick = 'creditPage.request()'>продолжить</button>`;
    }

    request() {
        const openDate = document.getElementById("openDate");
        const closeDate = document.getElementById("closeDate");
        const period = document.getElementById("period");

        const sum = document.getElementById("sum");
        const paymentSchedule = document.getElementById("paymentSchedule");

        // const credit = new Credit("12.11.2020", "12.11.2024", "12", "99999999", "");
        const credit = new Credit(openDate.value, closeDate.value, period.value, sum.value, paymentSchedule.value);
        
        server.addCredit(credit);
    }
}