class ProductCheck {
    page() {
        bodyInnerHTML.innerHTML = `
        <products>
        
        </products>`;
        server.responseCheck().then(
            response => {
                let credits = response.credits;
                let contributions = response.contributions;
                let product = document.getElementsByTagName("products")[0];
                credits.forEach(credit => {
                    product.innerHTML +=`
                    <credits>
                        <h1>Кредит</h1>
                        <p>дата открытия кредита ${credit.open_date}</p>
                        <p>дата закрытия кредита ${credit.close_date}</p>
                        <p>период погашения кредита ${credit.period}</p>
                        <p>сумма вклада ${credit.sum}</p>
                        <p>график платежей ${credit.payment_schedule}</p>
                    </credits>`
                });
                contributions.forEach(contribution => {
                    product.innerHTML += `
                    <contributions>
                        <h1>Вклад</h1>
                        <p>дата открытия вклада ${contribution.open_date}</p>
                        <p>дата закрытия вклада ${contribution.close_date}</p>
                        <p>период действия вклада ${contribution.period}</p>
                        <p>ставка ${contribution.bet}</p>
                        <p>периодичность капитализации ${contribution.frequency_of_capitalization}</p>
                    </contributions>`
                });
            }
        )
    }
}