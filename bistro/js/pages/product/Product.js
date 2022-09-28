class Product {
    page() {
        bodyInnerHTML.innerHTML = `
            <button onclick = 'contributionPage.page()'>открыть вклад</button>
            <button onclick = 'creditPage.page()'>оформить кредит</button>
            <button onclick = 'productCheck.page()'>все заявки на вклады и кредиты</button>
            <button onclick = 'logout.page()'>Выход из системы</button>`;
    }
}