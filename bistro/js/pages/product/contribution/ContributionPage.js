class ContributionPage {
    page() {
        bodyInnerHTML.innerHTML = `
            <h1>Заполните данные</h1>
            <input id="openDate" placeholder="введите дату открытия вклада">
            <input id="closeDate" placeholder="Введите дату закрытия вклада">
            <input id="period" placeholder="Введите период действия вклада">

            <input id="bet" placeholder="Введите ставку">
            <input id="frequencyOfСapitalization" placeholder="Введите периодичность капитализации %%">
            <button onclick = 'contributionPage.request()'>отправить заявку</button>`;
    }

    request() {
        const openDate = document.getElementById("openDate");
        const closeDate = document.getElementById("closeDate");
        const period = document.getElementById("period");
        
        const bet = document.getElementById("bet");
        const frequencyOfСapitalization = document.getElementById("frequencyOfСapitalization");

        // const contribution = new Contribution("12.11.2020", "12.11.2024", "12", 12.1, "monthly"); 
        const contribution = new Contribution(openDate.value, closeDate.value, period.value, bet.value, frequencyOfСapitalization.value);
        
        server.addContribution(contribution);
    }
}